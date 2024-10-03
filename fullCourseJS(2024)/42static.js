// Static =  keyword that defines properties or methods that belong 
//          to a class itself rather than the objects created
//          from that classs
//          (class owns anything static, not the objects)

// class MathUtil{
//     static PI = 3.14;

//     static getDiameter(radius){
//         return 2 * radius;
//     }
//     static getcircumference(radius){
//         return 2 * MathUtil.PI * radius;
//     }
//     static getArea(radius){
//         return MathUtil.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10))
// console.log(MathUtil.getcircumference(10).toFixed(2))
// console.log(MathUtil.getArea(10).toFixed(2))

class user{
    static userCount = 0;

    constructor(username){
        this.Username = username;
        user.userCount++;
    }
    static getUserCount(){
       console.log(`there are ${user.userCount} users onlinr`)
    }
    sayHello(){
        console.log(`Hi, my username is ${this.Username}`)
    }
}

const user1 = new user("SpongeBob");
const user2 = new user("Patrick");
const user3 = new user("Sandy");
const user4 = new user("Squidward");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();

console.log(user1.Username)
console.log(user2.Username)
console.log(user3.Username)
console.log(user4.Username)
console.log(user.userCount)

user.getUserCount();