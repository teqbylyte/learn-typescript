import { userObj } from "../sandbox";
import { Resource, Status } from "./enums.js";

// Generics type of T (or any letter)
// userObj which is extends must be the parameter type for the function
// If extends isn't specified then no parameter type will exist

const addUid = <T extends userObj>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);

    return {...obj, uid}
}

let person: userObj = {
    name: 'Lyte',
    age: 'Eighteen',
    level: 2
}

let user = addUid(person)

console.log(user.uid, user);



// Generics with Interfaces

interface Response<T> {
    message: Status,
    resource: Resource,
    data: T
}

// The type for the first decalaration of T will remain the same through out

const userResponse: Response<userObj> = {
    message: Status.PENDING,
    resource: Resource.LESSON,
    data: user
};

const res: Response<object> = {
    'message': Status.FAILED,
    resource: Resource.TASK,
    'data': []
}

const errorResponse: Response<string[]> = {
    message: Status.SUCCESS,
    resource: Resource.COURSE,
    data: ['Pin must be in digits', 'First name is required']
}

console.log(userResponse, res, errorResponse)