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

// масив користувачів які не підписані

const usersIsNotSubscribed = users.filter(item => item.isSubscribed === false);

console.table(usersIsNotSubscribed);

// список повних імен користувачів

users.forEach(item => {console.log(item.getFullName())});

// масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

const notAdultFemaleName = [];

users.forEach(item => {
    if(item.isMale === false & item.age >= 6 & item.age <= 18) {
        notAdultFemaleName.push(item.getFullName());
    }
});

console.log(notAdultFemaleName);

/*------------------------------------------
Чому це не працює, не може прочитати значення властивості item.isMale і далі? А те саме, прописане через стрілку в метод (вище) працює???

function isNotAdultFemale (item) {
    if (item.isMale === false & item.age >= 6 & item.age <= 18) {
        notAdultFemaleName.push(item.getFullName());
    };
};

users.forEach(isNotAdultFemale());
-----------------------------------------------
І в той же час, isNotAdultFemale не працює як колбек, але для окремо взятого елемента працює?

isNotAdultFemale(users[1])

console.log(notAdultFemaleName);
-----------------------------------------------
Те саме, на простішому прикладі

не працює:

function print (item) {
    console.log(item.age);
};

users.forEach(print());

працює:

users.forEach(item => console.log(item.age));
*/

// Видалити з масиву користувача з email  useremail5@gmail.com.

users.splice(users.findIndex(item =>
    item.email === 'useremail5@gmail.com'), 1); 

console.table(users);

// змінити email користувачу з id 2

users.forEach(item => {
    if(item.id === 2) {
        item.email = 'changeemail@gmail.com'
    };
});

console.table(users);

//  який відсоток користувачів підписані (subscribed).

function howMuchIsSubscribed (invArray) {
    const howMuchSubscribed = invArray.filter(item =>
        item.isSubscribed === true);

    console.log(`Підписку мають ${Math.round((howMuchSubscribed.length / invArray.length) * 100)}% користувачів`);
};

howMuchIsSubscribed(users);

// Знайти середній вік користувачів 

function avarageAge(invArray) {
    const summ = invArray.reduce((accum, item) => accum + item.age, 0);

    console.log(`Середній вік користувачів: ${Math.round(summ / invArray.length)} років`);
};

avarageAge(users);

// Впорядкувати користувачів за віком

users.sort((item1, item2) => item1.age - item2.age);

console.table(users);

// Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.

if(users.some(item => 
    item.email === 'useremail7@gmail.com')) {
        console.log(`В масиві є користувач, який має email useremail7@gmail.com`);
    } else {
        console.log(`В масиві немає користувачів, які мають email useremail7@gmail.com`);
    };

// Перевірити, чи всі користувачі підписані 

if(users.every(item => 
    item.isSubscribed === true)) {
        console.log(`Всі користувачі підписані`);
    } else {
        console.log(`Не всі користувачі підписані`);
    };
    