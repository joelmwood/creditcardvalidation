// All valid credit card numbers 55 
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

//should return true when valid, false if invalid
//does not mutate orig array
const validateCred = arr => {
  let counterTimesTwo = 0;
  let counter = 0 + arr[arr.length-1];
  let totalSum = 0;
  for(let i = arr.length -1; i >= 0; i-=2) {
    if(arr[i-1] * 2 >= 10){
      counterTimesTwo += arr[i-1] * 2 - 9;
    } else if (arr[i-1] >= 0){
      counterTimesTwo += arr[i-1] * 2;
    };
    if(arr[i-2] >= 0) {
      counter += arr[i-2];
    };
  };
  totalSum = counter + counterTimesTwo;
  if(totalSum%10 === 0) {
    return true;
  } else {
    return false;
  }
};

const findInvalidCards = arrNest => {
  let invalidArr = [];
  for(let i = 0; i < arrNest.length; i++) {
    if(validateCred(arrNest[i]) === false) {
      invalidArr.push(arrNest[i]);
    };
  };
  return invalidArr;
};

const idInvalidCardCompanies = arrNest => {
  let processArr = [];
  let exportArr = [];
  for(let i = 0; i < arrNest.length; i++) {
    if(arrNest[i][0] === 3) {
      processArr.push('Amex (American Express)');
    } else if(arrNest[i][0] === 4) {
      processArr.push('Visa');
    } else if(arrNest[i][0] === 5) {
      processArr.push('MasterCard');
    } else if(arrNest[i][0] === 6) {
      processArr.push('Discover');
    } else {
      processArr.push('Company Not Found');
    };
  };
  if (processArr.includes('Amex (American Express)')) {
    exportArr.push('Amex (American Express)');
  } if (processArr.includes('Visa')) {
    exportArr.push('Visa');
  } if (processArr.includes('MasterCard')) {
    exportArr.push('MasterCard');
  } if (processArr.includes('Discover')) {
    exportArr.push('Discover');
  } if (processArr.includes('Company Not Found')) {
    exportArr.push('Company Not Found');
};
  return exportArr;
};



// console.log(findInvalidCards(batch));
// let testCards = findInvalidCards(batch);
// console.log(idInvalidCardCompanies(testCards));
console.log(validateCred(valid3));
