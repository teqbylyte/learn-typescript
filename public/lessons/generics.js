// Generics type of T (or any letter)
// userObj which is extends must be the parameter type for the function
// If extends isn't specified then no function will exist
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
const userResponse = {
    message: 'User fetched!',
    data: person
};
const res = {
    'message': 'Fetched successfully',
    'data': user
};
const errorResponse = {
    message: 'Validation error.',
    data: ['Pin must be in digits', 'First name is required']
};
console.log(userResponse, res, errorResponse);
export {};
