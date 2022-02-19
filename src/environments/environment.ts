// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseUrl:"https://reqres.in/api/"
  baseUrl:"https://wb94xm7q2j.execute-api.ap-south-1.amazonaws.com/dev/",
  apiURL:{
    auth:{
      login:"api/login",
      register:"api/register"
    },
    rent:"products/rent",
    purchase:"products/purchase",
    findProduct:"products",
    profile:"profile",
    cart:"cart"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
