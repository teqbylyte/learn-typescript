// Arrays
// The type of data contained in an array at declaration cannot change later.
// String array
var names = ['lyte', 'forturne', 'blessing'];
names.push('Sophia');
// names.push(439) // Fails
// Mixed array
var gifts = ['car', 400200, 'watch'];
gifts.push('cloth');
gifts.push(5000);
// gifts.push(true); // Fails
// Objects
// The objects contain properties which behave as variables within the object instance.
// As such the property type cannot be redefined to another type once it has been declared
var course = {
    title: 'English',
    lessons: 4,
    published: true,
};
course.lessons = 6;
// course.lessons = '6'; // Fails
// We also can't add on extra property that wasn't initially there in the object.
//course.created_at = '2023'; // fails
// The object can also be updated but it must match the initial structre at declaration.
