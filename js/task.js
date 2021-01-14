import users from './users.js';


const getUserNames = users => {
    return users.map(user => user.name);
};  
console.log(getUserNames(users)); //[ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


const getUsersWithEyeColor = (users, color) => {
    
    return users.filter(user => user.eyeColor === color)
        .map(user => user)

} ;
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender)
        .map(user => user.name);
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
    .map(user => user)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max )
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


const calculateTotalBalance = users => {
    return users.reduce((sum , user) => sum + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916


