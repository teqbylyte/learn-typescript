"use strict";
// Type Alias
const logDetails = (name, uid) => {
    console.log(`${uid}: name`);
};
const getInfo = (user) => {
    console.log(`This is ${user.name} - ${user.email} and he is ${user.age}`);
};
// Function Signatures
let greet;
greet = (user, msg) => {
    return `${user.name} says ${msg}`;
};
