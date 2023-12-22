# Match Exchange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploying Match Exchange

Ensure you have the Firebase CLI installed.
If you don't, follow these documents:
[Install Firebase CLI](https://firebase.google.com/docs/cli)

Once installed, you'll need open Match Exchange in VS-Code, open the integrated terminal / command line, and log into your Specno account using the following command:
`firebase login`

**A side Note:** Firebase authentication through the VS-Code integrated terminal is temperamental. Always refresh your authentication by logging out (`firebase logout`), and then logging back in before commencing with deployment. You may THINK you are still authenticated from the last time you did this. You will get halfway through the deployment process and then firebase will wet the bed and tell you it no longer knows who you are.

### Deploying to Test

Deployments to test should happen _at least_ every second Thursday of a sprint, ie: The day before the sprint ends. The need to deploy to test does however have the tendency to arise at complete random, for various different reasons. The only rule for deployment to test is:

**You must deploy either from `dev`, or in very dire situations from a STABLE `feature` branch. Do not deploy from a ticket branch. Ever. I will find you.**

Once you have checked out to either `dev` or a stable `feature` branch (I will find you), and have thoroughly tested the application in it's current state, ensure that the following holds true:

- The `<!-- Test OAuth client id -->` is uncommented in the `index.html`
- The `Test Environment` is uncommented in both the `environment.ts` and the `environment.prod.ts`
- The `Admin Email` in the `constants.ts` is a `string[]` including both: the Match Exchange Info email address, and our test email address
- The `isAdmin` boolean in the `profile.component.ts` file is being calculated using a `.includes()` prototype

(The above should always be true for any branch that isn't a `release` branch or the `master` branch. If it isn't, hide under your desk for the rest of the day.)

Now, you may begin deployment:

1. Create a new optimized build of the application, using: `ng build`.
2. Check that the `.firebaserc` has a "default" value of "skudumatch-test". If it does not:
    1. Delete both the `.firebaserc` and `firebase.json` files, as well as the `.firebase` folder.
    2. Reinitialize firebase by running: `firebase init`.
        - Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"
        - Choose "Use an existing project" (If the cli exits here, it means you didn't refresh your authentication. Do so, and then restart the `firebase init` process)
        - Choose "skudumatch-test (SkuduMatch Test)"
        - Your public directory should be 'dist/skudu_match'
        - **Yes**, we do want to configure as a single page app
        - **No**, we DO NOT want to set up automatic builds and deploys with GitHub
        - **No**, we DO NOT want to overwrite 'dist/skudu_match/index.html'
3. Deploy, using: `firebase deploy --only hosting`
4. Commit any changes that might have occurred with the commit message: "Post Deploy Commit".

### Deploying to Live

We'll follow pretty much the exact same procedure as deploying to test, except it will now be heavily seasoned with **pressure**...

The only two changes that we will be making to the process we follow when deploying to test, are:

- We will introduce a more structured branching strategy
- We will alter the application environment to ensure it is pointing to `live`.

#### Branching Strategy

We deploy applications to production off of versioned `release` branches. Thereafter, we create a versioned `tag` of the codebase as it exists at that deployment. The versioned `release` branch can then be removed in an effort to maintain organized and de-cluttered source control. To achieve this, please:

1. Checkout to the `dev` branch. All versioned `release` branches must be branched off of `dev`
2. Thoroughly test the application in it's current state. Yes, it is necessary. Come on, just do it
3. Once finished, create a versioned `release` branch off of `dev` using the following naming convention: release/V{new version number}
eg: `release/V1.2.4`
4. Right, we now need to point the application environment to `live`, and deploy. Go and do that, the come back to step 5.
5. After deployment, right-click on your "Post Deploy Commit" commit, and click "Create tag here". Name the tag ONLY the version number, ie: `1.2.4`.
6. Once created scroll to the "Tags" menu in the left panel of the GitKraken GUI. Find your tag, right-click it, and push it to origin.
7. Merge the versioned `release` branch into `master`.
8. Delete the versioned `release` branch.

#### Point Application To Live

In it's current state, the application will be pointing to the `test` Google Authentication Client, Match Exchange Server, and will not allow Match Exchange to view the Admin tab in the Profile section. Change this by ensuring that the following holds true:

- The `<!-- Live OAuth client id -->` is uncommented in the `index.html`
- The `Live Environment` is uncommented in both the `environment.ts` and the `environment.prod.ts`
- The `Admin Email` in the `constants.ts` is a `string` version of only the Match Exchange Info email address
- The `isAdmin` boolean in the `profile.component.ts` file is being calculated by comparing the `adminEmails` constant to `user.email`

Now, you may begin deployment:

1. Create a new optimized build of the application, using: `ng build`.
2. Check that the `.firebaserc` has a "default" value of "skudumatch-58c5a". If it does not:
    1. Delete both the `.firebaserc` and `firebase.json` files, as well as the `.firebase` folder.
    2. Reinitialize firebase by running: `firebase init`.
        - Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"
        - Choose "Use an existing project" (If the cli exits here, it means you didn't refresh your authentication. Do so, and then restart the `firebase init` process)
        - Choose "skudumatch-58c5a"
        - Your public directory should be 'dist/skudu_match'
        - **Yes**, we do want to configure as a single page app
        - **No**, we DO NOT want to set up automatic builds and deploys with GitHub
        - **No**, we DO NOT want to overwrite 'dist/skudu_match/index.html'
3. Deploy, using: `firebase deploy --only hosting`
4. Commit any changes that might have occurred with the commit message: "Post Deploy Commit".


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
