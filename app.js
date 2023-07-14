// console.log("Hello World");

// //String

// let firstName = "hesam";
// let lastName = "behnami";
// let fullName = firstName + " " + lastName;

// console.log(fullName);
// ________________________________________;
// //Numbers
// let num1 = 5;
// let num2 = 5;
// let sum = num1 + num2;
// let sum2 = num1 - num2;
// let sum3 = num1 * num2;
// let sum4 = num1 / num2;

// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);

// let res = num1 + num2 + " " + fullName;
// console.log(res);
// let res2 = fullName + num1 + num2;

// console.log(res2);
// ________________________________________;
//if

// let age = 20;

// if (age > 30) {
//   console.log("Old");
// }
// if (age < 30) {
//   console.log("Young");
// }

// let validEmail = false;
// let ValidPassword = true;

// if (validEmail && ValidPassword) {
//   console.log("Your sing in");
// } else if (validEmail || ValidPassword) {
//   console.log("your email or password incorrect");
// }

// let isUser = false;
// let userRole = "admin";
// if (isUser) {
//   console.log("Wellcome User");
// } else if (userRole === "admin") {
//   console.log("Wellcome admin");
// } else {
//   console.log("Wellcome");
// }
// __________________________________________

// Scope
// let firstName = "hesam";
// if (true) {
//   let lastName = "behnami";
//   console.log(lastName);
//   if (true) {
//     let age = 30;
//     console.log(age);
//   }
// }

// console.log(firstName);
// _____________________________________________
//function

let message = function () {
  console.log("welcome");
};
message();

let userId = function (id) {
  console.log(id);
};
userId(10);

let userId2 = function (id) {
  let res = "uesr ID : " + id;
  return res;
};

let showresult = userId2(5);
console.log(showresult);
