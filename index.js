// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'some initial value';

const upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
}

const setBestCustomer = () => {
  bestCustomer = 'not bob';
}

const overwriteBestCustomer = (newName) => {
  bestCustomer = newName;
}

const changeLeastFavoriteCustomer = (newName) => {
  leastFavoriteCustomer = newName;
}