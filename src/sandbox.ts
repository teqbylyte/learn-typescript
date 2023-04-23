let greet: Function;

greet = (): void => {
    console.log('Hello people!');
}

const sum = (a: number, b: number) => {
    console.log(a + b);
}

function getBio(name:string, sex = 'male', age?: number|string) {
    console.log(name + ' is a ' + sex);
    console.log(age);
}

greet();

sum(3, 5);

getBio('Lyte')