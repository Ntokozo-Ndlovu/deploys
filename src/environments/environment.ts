// #region Test Environment
export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBxK92jQdfceClVqvHJur6D2181Z-1YWk0',
        authDomain: 'skudutest.firebaseapp.com',
        databaseURL: 'https://skudutest.firebaseio.com',
        projectId: 'skudutest',
        storageBucket: 'skudutest.appspot.com',
        messagingSenderId: '519714862029',
        appId: '1:519714862029:web:058a9979c6cafed6',
        measurementId: 'G-15C38FLYMS',
    },
    LOGO: '../../../assets/images/logofont.PNG',
    API: 'https://testapi.matchmx.com:50785/api',
    LOCALHOST_API: 'https://localhost:44366/api',
    STANDARD_QUALITY_ID: 0,
    DEFAULT_PACKAGING_ID: 1,
    DEFAULT_UOM_ID: 1,
    DEFAULT_PAYMENT_ID: 6,
    ROUGHAGE_BALES_CROP_IDS: [19, 20, 21, 22, 23, 25, 26, 27, 28, 93, 94, 95, 96, 97, 98, 99, 115, 116, 124],
    STRAW_CROP_IDS: [19, 20, 22, 26, 28],
    HAY_CROP_IDS: [21, 23, 25, 27],
    STRAW_HAY_INCO_TERM_IDS: [1, 6],
    ROUGHAGE_BALES_INCO_TERM_IDS: [1, 3],
    STRAW_HAY_UNIT_OF_MEASURE_IDS: [1, 5],
    CROP_CATEGORIES: [9, 10, 11, 13, 17],
};
// #endregion

// =================================== NB =================================== //

// The below Live environment should be used only when attempting to serve a
// a local version of the app that points to the Live Server & DB,
// and should only be used STRICTLY for testing whether or not a build of the
// app in it's current state will work whilst pointing to the Live server & DB.

// PROCEED WITH CAUTION, and realise that your interactions with the app
// locally will alter the clients Live DB.

// GitLense is watching you...

// ========================================================================== //

// #region Live Environment
// export const environment = {
//     production: true,
//     firebase: {
//         apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
//         authDomain: 'skudumain.firebaseapp.com',
//         databaseURL: 'https://skudumain.firebaseio.com',
//         projectId: 'skudumain',
//         storageBucket: 'skudumain.appspot.com',
//         messagingSenderId: '663811423141',
//         appId: '1:663811423141:web:5ddbed1a59e7a99b2f064c',
//     },
//     LOGO: '../../../assets/images/logofont.PNG',
//     API: 'https://api.matchmx.com:50685/api',
//     STANDARD_QUALITY_ID: 0,
//     DEFAULT_PACKAGING_ID: 1,
//     DEFAULT_UOM_ID: 1,
//     DEFAULT_PAYMENT_ID: 6,
//     STRAW_CROP_IDS: [19, 20, 22, 26, 28],
//     HAY_CROP_IDS: [21, 23, 25, 27],
//     STRAW_HAY_INCO_TERM_IDS: [1, 6],
//     STRAW_HAY_UNIT_OF_MEASURE_IDS: [1, 5],
//     CROP_CATEGORIES: [9, 10, 11, 13],
// };
// #endregion
