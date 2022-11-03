"use strict";
// class Human {
//     name!: string
//
//     log(name: string): void
//
//     log(name: string, age: number): void
//
//     log(name: string, age?: number): void {
//         if (name && !age) {
//             console.log(name)
//         } else {
//             console.log(name + "" + age)
//         }
//     }
// }
//
//
//
// class Person extends Human {
// }
// abstract class Figure {
//     abstract x: number;
//     abstract y: number;
//
//     abstract getArea(): void;
// }
//
//
// class Rectangle extends Figure {
//     x!: number
//     y!: number
//     width: number
//     height: number
//
//     constructor(width: number, height: number) {
//         super();
//         this.width = width
//         this.height = height
//
//     }
//
//     getArea(): void {
//         let square = this.width * this.height;
//         console.log("area =", square);
//     }
// }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static calculateYears(age) {
        return this.retirementAge;
        // return Person.retirementAge - age;
    }
}
Person.retirementAge = 65;
// @ts-ignore
const Singleton = (function () {
    // @ts-ignore
    let instance;
    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function () {
            // @ts-ignore
            if (!instance) {
                instance = createInstance();
            }
            // @ts-ignore
            return instance;
        }
    };
})();
function run() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    console.log("Same instance? " + (instance1 === instance2));
}
run();
// 1.Ինչխոր ժառանգած ֆունկցիաները կռնանք օվերրայտ էնենք, իսկ փոփոխականները չէ
