import { userObj } from "../sandbox";

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
    message: string,
    data: T
}

const userResponse: Response<userObj> = {
    message: 'User fetched!',
    data: person
};

const res: Response<object> = {
    'message': 'Fetched successfully',
    'data': user
}

const errorResponse: Response<string[]> = {
    message: 'Validation error.',
    data: ['Pin must be in digits', 'First name is required']
}

console.log(userResponse, res, errorResponse)