export const environment = {
  production: true,
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
