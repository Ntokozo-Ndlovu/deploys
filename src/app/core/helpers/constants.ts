import { IAPProduct } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import {
    CropCategoryImageData,
    DeliveryPointPinIcon,
    StepInfo,
    SupportCard,
    TutorialTableItem,
    VerificationSubscription,
    VerificationType,
} from './../models/viewModels';
import { Verification } from './../models/queryModels';
import { bbbeeRating, DisplayChoice, HomeCard, iconDetailData, StepperData } from '../models/viewModels';
import { MatchItems } from '../models/queryModels';
import { Dictionary } from '@ngrx/entity';

// #region Version

export const version: string = 'V9.0.0';

// #endregion

//#region Numeric Constants
export const HOURS_IN_A_DAY = 24;
export const MINUTES_IN_AN_HOUR = 60;
export const SECONDS_IN_A_MINUTE = 60;
export const MILLISECONDS_IN_A_SECOND = 1000;
//#endregion

//#region IAP Verification Ids
export const FARMER_VERIFICATION_ID = 1;
export const FARMER_ON_FARM_STORAGE_VERIFICATION_ID = 2;
export const PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID = 3;
export const BUYER_VERIFICATION_ID = 4;
export const TRANSPORTER_VERIFICATION_ID = 5;
export const UNVERIFIED_VERIFICATION_ID = 6;
export const GRAINSA_VERIFICATION_ID = 7;
export const MATCH_EXCHANGE_VERIFICATION_ID = 8;
//#endregion

//#region Verification groups
export const baseVerifications = [
    FARMER_VERIFICATION_ID,
    FARMER_ON_FARM_STORAGE_VERIFICATION_ID,
    PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID,
    BUYER_VERIFICATION_ID,
    TRANSPORTER_VERIFICATION_ID,
];
export const promotionVerifications = [GRAINSA_VERIFICATION_ID];
//#endregion

// #region Routes

export const ONBOARDING_ROUTE: string = '/onboarding';
export const DOCUMENT_VIEWER_ROUTE: string = '/document';
export const TRANSACTIONAL_RISK_ROUTE: string = '/transactional-risk';
export const SUBSCRIBE_ROUTE: string = '/subscribe';
export const SIGNUP_ROUTE: string = '/authentication/sign-up';
export const SIGNIN_ROUTE: string = '/authentication/sign-in';
export const FORGOT_PASSWORD_ROUTE: string = '/authentication/forgot-password';
export const LANDING_ROUTE: string = '/landing';
export const HOME_ROUTE: string = '/home';
export const BROKER_DASHBOARD_ROUTE: string = '/broker-dashboard';
export const SUPPORT_ROUTE: string = '/support';
export const CLEARING: string = '/clearing';

export const SCOUTS_ROUTE: string = '/dashboard/scouts';
export const LOTS_ROUTE: string = '/dashboard/lots';
export const NEGOTIATING_ROOM_ROUTE: string = '/dashboard/negotiations';
export const NEGOTIATIONS_COMPLETED_ROUTE: string = '/dashboard/completed';
export const BROWSE_THE_MARKET_ROUTE: string = '/dashboard/browse';
export const BROKERS_ROUTE: string = '/dashboard/brokers';
export const REQUESTS_ROUTE: string = '/dashboard/requested';
export const PROFILE_ROUTE: string = '/dashboard/profile';

export const LOTS_CROP_CATEGORIES_ROUTE: string = '/lots/crop-categories';
export const LOTS_CREATE_ROUTE: string = '/lots/create';
export const LOTS_EDIT_ROUTE: string = '/lots/edit';
export const LOTS_MATCH_ROUTE: string = '/lots/lot-match';

export const SCOUT_CREATE_ROUTE: string = '/scouts/create';
export const SCOUT_EDIT_ROUTE: string = '/scouts/edit';
export const SCOUT_FINE_TUNE_ROUTE: string = '/scouts/fine-tune';
export const SCOUT_SEARCH_RESULT_ROUTE: string = '/scouts/search-results';

export const NEGOTIATION_EDIT_ROUTE: string = '/negotiations/edit';
export const NEGOTIATION_VIEW_ROUTE: string = '/negotiations/view';

export const DELIVERY_POINT_ROUTE: string = '/delivery-point';

export const SUCCESS_ROUTE: string = '/success';

export const MATCHBOX_ROUTE: string = '/onboarding/matchbox';

export const FAQ_ROUTE: string = '/support/FAQs';
export const CONTACT_PAGE_ROUTE: string = '/support/contact-us';
export const KYC_PARTY_ROUTE: string = '/support/kyc-party';
export const DETAILED_TUTORIAL_ROUTE: string = '/support/detailed-tutorial';
export const VERIFICATION_ROUTE: string = '/support/verification';

// #endregion

// #region Stepper

export const onboardingContent: StepperData[] = [
    {
        title: 'Testing the Water',
        info: "Tell the Market what you're planning to buy or sell. Scout the Market, with no obligations.",
        imagePath: 'assets/images/onboard-step1-MX.svg',
    },
    {
        title: 'Step Up to the Plate',
        info: 'By creating a Match Lot you are communicating to the Market that you are a willing seller or buyer of a specific portion of your crop.',
        imagePath: 'assets/images/onboard-step2-MX.svg',
    },
    {
        title: 'Matching',
        info: 'Once you have created a lot, Match Exchange will match your Lot with counter parties interested in your lot. Choose a Match and you can start to negotiate.',
        imagePath: 'assets/images/onboard-step3-MX.svg',
    },
    {
        title: "Negotiating: Let's Get Serious",
        info: "In the Negotiating Room, the buyer and seller can negotiate the most important conditions of the deal. Agree on the 5 P's and 2 Q's to get a successful Match.",
        imagePath: 'assets/images/onboard-step4-MX.svg',
    },
    {
        title: 'Match',
        info: 'Once you have a Match, you will be introduced to the interested party. The final contract is done directly between buyer and seller.',
        imagePath: 'assets/images/onboard-step5-MX.svg',
    },
];

// #endregion

// #region Home

export const HOME_CARDS_DATA: { [key: string]: HomeCard } = {
    browse: {
        title: 'Browse MX Market',
        routesTo: BROWSE_THE_MARKET_ROUTE,
        source: './assets/images/browse-blue-icon.svg',
        sourceAlt: 'Browse',
    },
    clearing: {
        title: 'Clear with MX',
        routesTo: CLEARING,
        source: './assets/images/clearing-blue-icon.svg',
        sourceAlt: 'Clearing',
    },
    scouts: {
        title: 'Scout the Market',
        routesTo: SCOUTS_ROUTE,
        source: './assets/images/scout-blue-icon.svg',
        sourceAlt: 'Scout',
        stepText: 'Step 1:',
    },
    lots: {
        title: 'Lots',
        routesTo: LOTS_ROUTE,
        source: './assets/images/lots-blue-icon.svg',
        sourceAlt: 'Lot',
        stepText: 'Step 2:',
    },
    negotiations: {
        title: 'Negotiate',
        routesTo: NEGOTIATING_ROOM_ROUTE,
        source: './assets/images/negotiate-blue-icon.svg',
        sourceAlt: 'Negotiate',
        stepText: 'Step 3:',
    },
    completed: {
        title: 'Matches',
        routesTo: NEGOTIATIONS_COMPLETED_ROUTE,
        source: './assets/images/match-blue-icon.svg',
        sourceAlt: 'Match',
        stepText: 'Step 4:',
    },
    brokers: {
        title: 'Brokers',
        routesTo: BROKERS_ROUTE,
        source: './assets/images/brokers-blue-icon.svg',
        sourceAlt: 'Brokers',
    },
    profile: {
        title: 'Profile',
        routesTo: PROFILE_ROUTE,
        source: './assets/icons/user-blue-icon.svg',
        sourceAlt: 'Profile',
    },
    FAQ: {
        title: 'Subscription & More Info',
        routesTo: SUPPORT_ROUTE,
        source: './assets/images/FAQ-blue-icon.svg',
        sourceAlt: 'FAQ',
    },
};

// #endregion

// #region Support

export const SUPPORT_CARDS_DATA: SupportCard[] = [
    {
        title: 'Subscribe to MX',
        routesTo: VERIFICATION_ROUTE,
        linksTo: null,
        source: './assets/images/verification-farmer-icon.svg',
        sourceAlt: 'Crop field behind a green circle with a white tick inside',
    },
    {
        title: 'Quick Tutorial',
        routesTo: LANDING_ROUTE,
        linksTo: null,
        source: './assets/images/quick-tutorial.svg',
        sourceAlt: 'Illustration with a circle and 3 sections for Buyers, Sellers and Product',
    },
    {
        title: 'Explainer Videos',
        routesTo: null,
        linksTo: 'https://www.youtube.com/watch?v=ERit4FVI7GQ&list=PLHycIisL9eaGWve6BwwasY-XqzNM27bU7',
        source: './assets/images/play-button.svg',
        sourceAlt: 'Green play button',
    },
    {
        title: 'Detailed Tutorial',
        routesTo: DETAILED_TUTORIAL_ROUTE,
        linksTo: null,
        source: './assets/images/detailed-tutorial.svg',
        sourceAlt: 'Two men talking over a sack of gold coins',
    },
    {
        title: 'FAQs',
        routesTo: FAQ_ROUTE,
        linksTo: null,
        source: './assets/images/FAQ.svg',
        sourceAlt: 'Confused woman with her hands in the air',
    },
    {
        title: 'Know Your Counterparty',
        routesTo: KYC_PARTY_ROUTE,
        linksTo: null,
        source: './assets/images/get-to-kyk.svg',
        sourceAlt: "Man's face wearing a hat and glass",
    },
    {
        title: 'Contact Us',
        routesTo: CONTACT_PAGE_ROUTE,
        linksTo: null,
        source: './assets/images/contact-us.svg',
        sourceAlt: 'Old style phone with speech bubble',
    },
];

// #endregion

// #region Detailed Tutorial

export const TUTORIAL_TABLE_DATA: TutorialTableItem[] = [
    {
        title: 'Product and Packaging',
        value: 'Yellow Maize, in Bulk',
    },
    {
        title: 'Position / INCO terms',
        value: 'Ex silo Bultfontein',
    },
    {
        title: 'Period of availability',
        value: '1 July 2021 to 31 July 2021',
    },
    {
        title: 'Price',
        value: 'R per ton of R per basis',
    },
    {
        title: 'Payment terms',
        value: 'Payment after proof of product',
    },
    {
        title: 'Quality',
        value: 'YM1',
    },
    {
        title: 'Quantity',
        value: '200 Metric tons',
    },
];

// #endregion

// #region Navigation Bar

export const iconDetails: { [key: string]: iconDetailData } = {
    'Step 1': {
        name: 'scouts',
        sourceGrey: './assets/images/bottom-nav-scouts-grey.svg',
        sourceBlue: './assets/images/bottom-nav-scouts-blue.svg',
    },
    'Step 2': {
        name: 'lots',
        sourceGrey: './assets/images/bottom-nav-lots-grey.svg',
        sourceBlue: './assets/images/bottom-nav-lots-blue.svg',
    },
    'Step 3': {
        name: 'negotiations',
        sourceGrey: './assets/images/bottom-nav-negotiations-grey.svg',
        sourceBlue: './assets/images/bottom-nav-negotiations-blue.svg',
    },
    'Step 4': {
        name: 'completed',
        sourceGrey: './assets/images/bottom-nav-completed-grey.svg',
        sourceBlue: './assets/images/bottom-nav-completed-blue.svg',
    },
    Browse: {
        name: 'browse',
        sourceGrey: './assets/images/bottom-nav-browse-grey.svg',
        sourceBlue: './assets/images/bottom-nav-browse-blue.svg',
    },
};

// #endregion

// #region BBBEE

export const ratingData: bbbeeRating[] = [
    'Non-compliant',
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
    'Level 6',
    'Level 7',
    'Level 8',
];

// #endregion

// #region Match Items

export const matchItems: MatchItems[] = [
    'Product',
    'Position',
    'Period',
    'ContractPrice',
    'Payment',
    'Quantity',
    'Quality',
];

// #endregion

// #region Market Availability

export const displayChoices: DisplayChoice[] = [
    {
        value: true,
        key: 'Available to market',
    },
    {
        value: false,
        key: 'Not available to market',
    },
];

// #endregion

// #region Submit Match Modal

export const submitMatchContent: string[] = [
    'Legal Entity Name: ',
    'The Counterparty will be notified about the Match and will have 24 hours to accept the Match before the Lot opens up for negotiation again.',
    'Take note: If your counterparty is making use of a Broker, they \n' +
        'have to pay a commission fee to MX to be introduced.',
    'Once the interested party accepts the Match you will be introduced to them. The final contract will be negotiated directly between buyer and seller.',
];

// #endregion

// #region Admin Email
export const adminEmails: string[] = ['info@matchmx.com', 'test@gmail.com'];

// #endregion

// #region Crop Categories

export const cropCategoriesImages: CropCategoryImageData[] = [
    {
        name: 'Grains & Oilseeds',
        source: './assets/icons/grains-and-oilseeds.svg',
        sourceAlt: 'Silo filled with grain',
    },
    {
        name: 'Roughage (Bales)',
        source: './assets/icons/roughage.svg',
        sourceAlt: 'Bale of hay aside a rake',
    },
    {
        name: 'Legumes & Pulses',
        source: './assets/icons/legumes-and-pulses.svg',
        sourceAlt: 'Pea pod with peas aside it',
    },
    {
        name: 'Fruits & Vegetables',
        source: './assets/icons/fruit-and-veg.svg',
        sourceAlt: 'Carrot, apple, and avocado',
    },
    {
        name: 'Byproducts',
        source: './assets/icons/byproducts.svg',
        sourceAlt: 'Bag with picture of grain on it',
    },
    {
        name: 'Livestock',
        source: './assets/icons/livestock.svg',
        sourceAlt: 'Pig',
    },
    {
        name: 'Transport',
        source: './assets/icons/transport.svg',
        sourceAlt: 'Truck',
    },
    {
        name: 'Intention to plant',
        source: './assets/icons/roughage.svg',
        sourceAlt: 'Hand shovel in pile of dirt',
    },
    {
        name: 'SAFEX Forward Hedging',
        source: './assets/icons/safex-forward-hedging.svg',
        sourceAlt: 'Dollar sign with umbrella',
    },
];

// #endregion

// #region Delivery Point Icons

export const sellerDeliveryPointIcon: DeliveryPointPinIcon = {
    url: './assets/icons/green-location-pin.svg',
    scaledSize: {
        width: 20,
        height: 40,
    },
};

export const buyerDeliveryPointIcon: DeliveryPointPinIcon = {
    url: './assets/icons/red-location-pin.svg',
    scaledSize: {
        width: 20,
        height: 40,
    },
};

// #endregion

//#region Verification

export const verificationTypes: Dictionary<VerificationType> = {
    [FARMER_VERIFICATION_ID]: {
        id: FARMER_VERIFICATION_ID,
        name: 'Farmer',
        source: './assets/icons/verification-farmer-icon.svg',
    },
    [FARMER_ON_FARM_STORAGE_VERIFICATION_ID]: {
        id: FARMER_ON_FARM_STORAGE_VERIFICATION_ID,
        name: 'Farmer: On-Farm Storage',
        source: './assets/icons/verification-farmer-on-farm-icon.svg',
    },
    [PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID]: {
        id: PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID,
        name: 'Processor of Byproducts',
        source: './assets/icons/verification-processor-icon.svg',
    },
    [BUYER_VERIFICATION_ID]: {
        id: BUYER_VERIFICATION_ID,
        name: 'Buyer',
        source: './assets/icons/verification-buyer-icon.svg',
    },
    [TRANSPORTER_VERIFICATION_ID]: {
        id: TRANSPORTER_VERIFICATION_ID,
        name: 'Transporter',
        source: './assets/icons/verification-transporter-icon.svg',
    },
    [UNVERIFIED_VERIFICATION_ID]: {
        id: UNVERIFIED_VERIFICATION_ID,
        name: 'Unverified',
        source: './assets/icons/verification-unverified-icon.svg',
    },
    [GRAINSA_VERIFICATION_ID]: {
        id: GRAINSA_VERIFICATION_ID,
        name: 'Grain SA',
        source: './assets/icons/grainSA-icon.svg',
    },
    [MATCH_EXCHANGE_VERIFICATION_ID]: {
        id: MATCH_EXCHANGE_VERIFICATION_ID,
        name: 'Acting on behalf of premium client',
        source: './assets/icons/MX-verification-icon.svg',
    },
};

export const VERIFICATION_SUBSCRIPTIONS: Dictionary<VerificationSubscription> = {
    [FARMER_VERIFICATION_ID]: {
        id: FARMER_VERIFICATION_ID,
        name: 'Farmer',
        identifier: 'Farmer',
        source: './assets/icons/verification-farmer-icon.svg',
        product: { title: 'Farmer', price: 'R1150' },
        product_monthly: { title: 'Farmer', price: 'R115' },
    },
    [FARMER_ON_FARM_STORAGE_VERIFICATION_ID]: {
        id: FARMER_ON_FARM_STORAGE_VERIFICATION_ID,
        name: 'Farmer: On-Farm Storage',
        identifier: 'Farmer, On-farm storage',
        source: './assets/icons/verification-farmer-on-farm-icon.svg',
        product: { title: 'Farmer: On-Farm Storage', price: 'R2300' },
        product_monthly: { title: 'Farmer: On-Farm Storage', price: 'R230' },
    },
    [PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID]: {
        id: PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID,
        name: 'Processor of Byproducts',
        identifier: 'Processor of by-products',
        source: './assets/icons/verification-processor-icon.svg',
        product: { title: 'Processor of Byproducts', price: 'R5500' },
        product_monthly: { title: 'Processor of Byproducts', price: 'R550' },
    },
    [BUYER_VERIFICATION_ID]: {
        id: BUYER_VERIFICATION_ID,
        name: 'Buyer',
        identifier: 'Buyer',
        source: './assets/icons/verification-buyer-icon.svg',
        product: { title: 'Buyer', price: 'R5500' },
        product_monthly: { title: 'Buyer', price: 'R550' },
    },
    [TRANSPORTER_VERIFICATION_ID]: {
        id: TRANSPORTER_VERIFICATION_ID,
        name: 'Transporter',
        identifier: 'Transporter',
        source: './assets/icons/verification-transporter-icon.svg',
        product: { title: 'Transporter', price: 'R5500' },
        product_monthly: { title: 'Transporter', price: 'R550' },
    },
    [GRAINSA_VERIFICATION_ID]: {
        id: GRAINSA_VERIFICATION_ID,
        name: 'Grain SA',
        identifier: 'GrainSA',
        source: './assets/icons/grainSA-icon.svg',
        product: { title: 'GrainSA', price: 'R1150' },
        product_monthly: { title: 'GrainSA', price: 'R115' },
        promotion: '1 Year Free',
    },
};

export const RCproductIdentifiers = {
    [FARMER_VERIFICATION_ID]: ['mx_farmer_year', 'mx_farmer', 'mx_farmer_month', 'mx_farmer_monthly'],
    [BUYER_VERIFICATION_ID]: ['mx_buyer_year', 'mx_buyer', 'mx_buyer_month', 'mx_buyer_monthly'],
    [FARMER_ON_FARM_STORAGE_VERIFICATION_ID]: [
        'mx_farmer_on_farm_storage_year',
        'mx_farmer_on_farm_storage',
        'mx_farmer_on_farm_storage_month',
        'mx_farmer_on_farm_storage_monthly',
    ],
    [PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID]: [
        'mx_processor_of_by_products_year',
        'mx_processor_of_by_products',
        'mx_processor_of_by_products_month',
        'mx_processor_of_by_products_monthly',
    ],
    [TRANSPORTER_VERIFICATION_ID]: [
        'mx_transporter_year',
        'mx_transporter',
        'mx_transporter_month',
        'mx_transporter_monthly',
    ],
    [GRAINSA_VERIFICATION_ID]: ['mx_grainsa_year', 'mx_grainsa', 'mx_grainsa_month', 'mx_grainsa_monthly'],
};

// #endregion

// #region Verification

export const DEFAULT_VERIFICATION: Verification = { id: 6, verificationDate: Date.now() };

export const GRAINSA_VERIFICATION_TEXT: { description: string; period: string } = {
    description:
        'You are a verified member of Grain SA, giving you 1 free year of this exclusive verification type. This gives you access to all Premium features in the Match Exchange.',
    period: '1 year FREE with your subscription!',
};

// #endregion

// #region Regex

export const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const specialCharacterRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export const numberRegex = /.*[0-9].*/;

export const letterRegex = /.*[a-zA-Z].*/;

// #endregion

// #region Required User Profile Items

export const requiredUserProfileItems: string[] = ['firstname', 'lastname', 'email', 'phone', 'location'];

// #endregion

// #region Lot Form Asterisk Months

export const lotFormAsteriskMonths: string[] = ['March', 'May', 'July', 'September', 'December'];

// #endregion

// #region Home

export const STEP_INFO_DATA: { [key: string]: StepInfo } = {
    browse: {
        iconPath: 'assets/images/browse-blue-icon.svg',
        tooltip: 'Browse the Market',
        heading: 'Browse the Market',
        body: 'Browse MX for existing Lots you are interested in. See what price buyers and sellers are ready to buy and sell their product for.',
    },
    clearing: {
        iconPath: './assets/images/clearing-blue-icon.svg',
        tooltip: 'Clear with MX',
        heading: 'Clear with MX',
        body: 'MX will walk you through a clearing process to help you trade in the safest way possible.',
    },
    brokers: {
        iconPath: './assets/images/brokers-blue-icon.svg',
        tooltip: 'Brokers',
        heading: 'Why Appoint a Broker?',
        body: `Subscribers can appoint a Broker to manage their account.
             Brokers can create Scouts, Lots, and Negotiate on the subscribers' behalf.
            ' Throughout the process keep complete control. Only you submit the final Match.`,
    },
    scouts: {
        iconPath: 'assets/images/onboard-step1-MX.svg',
        tooltip: 'Use Scouts to search the Market',
        heading: 'What is a Scout?',
        body: "We call it the magic of an MX Scout because you can't do the best deal if you don't see all the available options. With a Scout, you get linked permanently by our technology to buyers or sellers interested in buying from you or selling to you. This link is permanent, and the moment our algorithm finds another relevant party, your Scout will be updated.",
    },
    lots: {
        iconPath: 'assets/images/onboard-step2-MX.svg',
        tooltip: 'Use Lots to search the Market',
        heading: 'What is a Lot?',
        body: `
        <p> With an MX Lot, you communicate to your Scout links that you want to sell or buy a specific portion of your crop (or annual need if you are a trader or processor). Every party linked in your Scout will be notified that you are in the market to sell or buy. A Lot describes the 5 P's and 2 Qs, and an interested party can now create a counter-Lot. The 5 P's are Product, Position, Period of availability, Price, Payment Terms. The 2 Q's are Quality and Quantity. Your Lot gets linked to all Lots of parties that want to do business with you. You can then choose with whom you want to negotiate (one or multiple). There is no better way to perfect the timing between buyer and seller than an MX Lot. </p>
          <ul>
            <li>Ex Silo-Coop Certificate - Buy Coop Certificate, only if Sales contract makes Provision for Coop certificates.</li>
            <li>Ex Silo-SAFEX Certificate - Buy SAFEX Certificate.</li>
            <li>Ex Silo-Title Transfer - Direct Transfer of stock from Delivery Party to Match Exchange.</li>
            <li>Ex Silo-ProducerDelivery - Delivery of stock by Producer, direct on TMX folio at Silo.</li>
            <li>Ex Silo-Farm - Delivery of Producer stock by TMX, direct on TMX folio at Silo.</li>
            <li>Ex Farm - Delivery of Producer stock by TMX, at Milldoor.</li>
            <li>Ex Mill - Delivery of stock by Producer, at Milldoor.</li>
          </ul>  `,
    },
    negotiations: {
        iconPath: 'assets/images/onboard-step4-MX.svg',
        tooltip: 'How to Negotiate',
        heading: 'How to Negotiate?',
        body: "Once you have identified the Lot(s) that you want to negotiate with, you can click the 'Let's Negotiate' button. Clicking on that will bring both parties into the Negotiating Room. In there, you can negotiate with one or multiple parties the 5 P's and 2 Q's until you have a consensus on all seven Lot items. Choose the best Lot for you and click on the 'Submit Match' button.",
    },
    completed: {
        iconPath: 'assets/images/onboard-step5-MX.svg',
        tooltip: 'What are Completed Negotiations',
        heading: 'Completed Negotiations',
        body: 'Once you have submitted your match, the counterparty has 24h to counter-submit your match. When the counterparty submitted (accepted) the match, MX will reveal the identity of the two parties to each other via email. All the necessary contact details will be in the email so that the counterparties can contact each other to finalize the deal and sign a contract. Remember, there is no contractual risk by using MX. Until the final contract is signed, the counterparties have no obligation to each other. MX is solving the two biggest problems, and that is that buyers and sellers always know of each other and getting the timing perfect between them.',
    },
};

// #endregion
