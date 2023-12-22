import {
  CallableContext,
  HttpsError,
} from "firebase-functions/lib/providers/https";
import { firestore, auth } from "../modules/firebase";
// import { cloneDeep } from "lodash";

//#region Helper functions
async function createGenericUser(email: string, password: string) {
  try {
    return await auth.createUser({ password, email });
  } catch (error) {
    return Promise.reject(error);
  }
}

async function createGenericDatabaseUser(user: any) {
  // #region Setting Custom User Claims
  try {
    const userRef = firestore.doc(`Users/${user.uid}`);
    const doesExist: boolean = (await userRef.get()).exists;
    let prmDatabaseUpdate: Promise<any>;
    if (!doesExist) {
      prmDatabaseUpdate = userRef.set(user);
    } else {
      prmDatabaseUpdate = userRef.update(user);
    }
    await prmDatabaseUpdate;
    return "success";
  } catch (error) {
    console.log("Error: " + error);
    await auth.deleteUser(user.uid);
    return Promise.reject(
      "An error occurred while attempting to create the user on the database"
    );
  }
  // #endregion
}

//#endregion

export const registerUser = async (data: any, context: CallableContext) => {
  if (!context.auth) {
    const { user, password } = data;
    try {
      const firebaseUser = await createGenericUser(user.email, password);
      const newUser = {
        ...user,
        uid: firebaseUser.uid,
      };
      await createGenericDatabaseUser(newUser);
      // TODO: Send the verification email to the user.
      return auth.getUser(firebaseUser.uid);
    } catch (error) {
      console.log("error: ", error);

      throw new HttpsError("unimplemented", (error as any).code);
    }
  } else {
    throw new HttpsError("already-exists", "auth/signed-in");
  }
};
