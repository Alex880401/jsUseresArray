function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
};

const userProto = {};

userProto.getFullName = function() {
    return `${this.firstName}`+` `+`${this.lastName}`;
};

User.prototype = userProto;

const users = [];

for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() < 0.5,
        `useremail${i}@gmail.com`,
        Math.random() < 0.5
    );

    users.push(user);
};

console.table(users);

// перевірка роботи getFullName
//users.forEach(item => {console.log(item.getFullName())});

// масив користувачів які не підписані

const usersIsNotSubscribed = users.filter(item => item.isSubscribed === false);

console.table(usersIsNotSubscribed);

users.forEach(item => {console.log(item.getFullName())});
