import * as functions from "firebase-functions";
import axios from "axios";

let registerUser;
let privatiseExpiredLots;
let monitorBuyerSellerNegotiationPayments;
let API = "https://testapi.matchmx.com:50785/api";

if (
  !process.env.FUNCTION_NAME ||
  process.env.FUNCTION_NAME === "registerUser"
) {
  registerUser = functions.https.onCall(
    require("./authentication/registration").registerUser
  );
}

privatiseExpiredLots = functions.pubsub
  .schedule("0 0 * * SUN")
  .onRun(async (context) => {
    try {
      const response = await axios.get(`${API}/lot/privatise-expired-lots`);
      return console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  });

monitorBuyerSellerNegotiationPayments = functions.firestore
  .document("BrokerNegotiations/{id}")
  .onUpdate(async (change, context) => {
    try {
      const newValue = change.after.data();
      const previousValue = change.before.data();

      console.log(`Document ${context.params.id} has been updated`);
      console.log("New Value:", newValue);
      console.log("Previous Value:", previousValue);
      if (
        newValue !== undefined &&
        newValue.sellerPaid === true &&
        newValue.buyerPaid === true &&
        newValue.emailSent === false
      ) {
        const lotMatchId: number = newValue.lotMatchId;
        const documentId: string = context.params.id;
        const payload = {
          lotMatchId: lotMatchId,
          paymentDocumentUid: documentId,
        };
        console.log(payload);
        const response = await axios.post(
          `${API}/match/send-mym-email`,
          payload
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error:", error.response.data ?? error.message);
    }
  });

export {
  registerUser,
  privatiseExpiredLots,
  monitorBuyerSellerNegotiationPayments,
};
