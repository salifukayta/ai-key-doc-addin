// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyDt0RUNOTXdjlJPDXot0lGJ8675G5ngxWI',
    authDomain: 'woptimiser.firebaseapp.com',
    databaseURL: 'https://woptimiser.firebaseio.com',
    projectId: 'woptimiser',
    storageBucket: 'woptimiser.appspot.com',
    messagingSenderId: '145236662784'
  }

};
