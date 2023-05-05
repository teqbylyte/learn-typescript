import { Resource, Status } from "./enums.js";
// Generics type of T (or any letter)
// userObj which is extends must be the parameter type for the function
// If extends isn't specified then no parameter type will exist
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let person = {
    name: 'Lyte',
    age: 'Eighteen',
    level: 2
};
let user = addUid(person);
console.log(user.uid, user);
// The type for the first decalaration of T will remain the same through out
const userResponse = {
    message: Status.PENDING,
    resource: Resource.LESSON,
    data: user
};
const res = {
    'message': Status.FAILED,
    resource: Resource.TASK,
    'data': []
};
const errorResponse = {
    message: Status.SUCCESS,
    resource: Resource.COURSE,
    data: ['Pin must be in digits', 'First name is required']
};
console.log(userResponse, res, errorResponse);
