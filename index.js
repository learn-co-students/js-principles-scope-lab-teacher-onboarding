var customerName = 'bob';

upperCaseCustomerName = () => {
  this.customerName = this.customerName.toUpperCase();
}

setBestCustomer = () => {
  this.bestCustomer = 'not bob';
}

overwriteBestCustomer = () => {
  this.bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Fred"

changeLeastFavoriteCustomer = () => {
  return leastFavoriteCustomer = "Change!"
}
