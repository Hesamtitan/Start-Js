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

// let message = function () {
//   console.log("welcome");
// };
// message();

// let userId = function (id) {
//   console.log(id);
// };
// userId(10);

// let userId2 = function (id) {
//   let res = "uesr ID : " + id;
//   return res;
// };

// let showresult = userId2(5);
// console.log(showresult);
// ________________________________________________
//arguments - default - parameters

// let sum = function (a, b, c) {
//   let res = (a / b) * c;
//   return res;
// };
// let showresult = sum(10, 2, 3);
// console.log(showresult);

// let sum2 = function (a = 5, b = 1) {
//   let res = a + b;
//   return res;
// };

// let showresult2 = sum2(10 + 10);
// console.log(showresult2);
// ___________________________________________________

//template string

// let userInfo = function (name, id) {
//   return `${name}  ${id}`;
// };

// let showresult = userInfo("hesam", 12);
// console.log(showresult);
// // or

// let userInfo1 = function (name, id) {
//   return `
//   ${(name = "hesam")}

//    ${(id = 12)}`;
// };

// let showresult1 = userInfo1();
// console.log(showresult1);
// ------------------------------------------------------
//objects
// let userInfo1 = {
//   userId: 1,
//   userName: "hesam",
//   role: "admin",
// };

// let userInfo2 = {
//   userId: 2,
//   userName: "Arash",
//   role: "owner",
// };

// let result = function (detect,detect2) {
//   console.log(` ${detect.userId} ${detect.userName} ${detect.role}

//  ${detect2.userId} ${detect2.userName} ${detect2.role}`);
// };

// result(userInfo1,userInfo2);
//____________________________________________________________________
//09.challenge   (tavabbe & objects)
// let hesam = {
//   outgo: 0,
//   income: 0,
// };

// //outgo
// let addOutgo = function (account, outgo) {
//   account.outgo = account.outgo + outgo;
// };

// //income
// let addIncom = function (account, income) {
//   account.income = account.income + income;
// };

// //mohasebe
// let data = function (account) {
//   let balance = account.income - account.outgo;
//   return balance;
// };

// //user,income
// addIncom(hesam, 50000);
// //user,outgo
// addOutgo(hesam, 43285);

// console.log(data(hesam));

//____________________________________________________________________
//10-object-methods

// let course = {
//   studentLimit: 30,
//   studentCount: 11,
//   sum: function (res) {
//     let surplus = this.studentLimit - this.studentCount;
//     // console.log(this.studentLimit - this.studentCount);
//   },
// };

// let sandogh = {
//   daramad: 424,
//   hazine: 70,
// };

// let adddaramad = function (hesab) {
//   console.log(`${hesab.daramad}`);
// };

// let addhazine = function (hesab) {
//   console.log(`${hesab.hazine}`);
// };

// let mandehesab = function () {
//   let balance = adddaramad - addhazine;
// };

// adddaramad(sandogh);
// addhazine(sandogh);
// console.log(mandehesab);
//____________________________________________________________________
// 11-string-methods

// let fullName = "  Hesam_titan  ";
// console.log(fullName.length);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.includes("Hesam"));
// console.log(fullName.includes("titan"));
// console.log(fullName.includes(12345));
// console.log(fullName.trim());

//____________________________________________________________________

//12-challenge-02

//let userName = "hesam_titan";

//let password = "hesam12345";
// let password2 = "hesam11111";

// console.log(password.length > 8);
// console.log(password.includes('12345'))
// console.log(password2.includes('12345'))
//-------------------- khodam neveshtam UP ^^^

let validPassword = function (password) {
  if (password.length > 8 && !password.includes("12345")) {
    console.log("you are sing in");
    return true;
  } else {
    console.log("your password have problem");
    return false;
  }
};
console.log(validPassword("aswxx"));
console.log(validPassword("hesam12"));
console.log(validPassword("hesam12345"));
console.log(validPassword("hesam30298"));
