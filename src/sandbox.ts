// Type Alias

type StringOrNum = string|number;

export type userObj = {name: string, age: StringOrNum, email?: string, level: number}

const logDetails = (name: string, uid: StringOrNum) => {
    console.log(`${uid}: name`);
}

const getInfo = (user: userObj) => {
    console.log(`This is ${user.name} - ${user.email} and he is ${user.age}`)
}

// Function Signatures

let greet: (user: userObj, msg: string) => string;

greet = (user, msg) => {
    return `${user.name} says ${msg}`;
}