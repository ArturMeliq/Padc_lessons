"use strict";
// interface IDescription {
//     figcaption: string
// }
//
// interface IImplements {
//     _name?: string,
//     sName: string,
//     age: number,
// }
//
//
// class Description implements IDescription{
//     figcaption!:string
//
//     constructor() {
//     }
// }
//
// class Person extends Description implements IImplements {
//     private _name?: string = "Artur"
//
//
//     constructor(public sName: string, private _age: number) {
//         super()
//     }
//
//     get age() {
//         return this._age
//     }
//
//
//     set age(value: number) {
//         if (value && value < 0) {
//             return
//         }
//         this._age = value
//     }
//
//     setName(value?: string) {
//         if (value && value.length < 2) {
//             return
//         }
//         this._name = value
//     }
//
//     getName() {
//         return this._name
//     }
//
// }
//
// const person = new Person("Meliqyan", 25)
//
// person.setName(" ")
// person.getName()
// person.age = 16
// person.age
// console.log(person)
//
//=================================================================
class Persone {
    findValuesWithkey(arr, argKey) {
        const filteredData = [];
        for (const item of arr) {
            for (const key in item) {
                if (key === argKey) {
                    filteredData.push(item[key]);
                }
                if (typeof item[key] === 'object') {
                    if (Array.isArray(item[key])) {
                        filteredData.push(...this.findValuesWithkey(item[key], argKey));
                    }
                    else {
                        filteredData.push(...this.findValuesWithkey([item[key]], argKey));
                    }
                }
            }
        }
        return filteredData;
    }
}
class Director extends Persone {
    constructor(_dName) {
        super();
        this._dName = _dName;
        this.managers = [];
    }
    addManager(manager) {
        if (manager) {
            this.managers.push(manager);
        }
        return this.managers;
    }
    getAllManagers() {
        return this.managers;
    }
    getProjects() {
        const projects = [];
        for (let i = 0; i < this.managers.length; i++) {
            projects.push(this.managers[i].project);
        }
        return projects;
    }
    // @ts-ignore
    getTeams() {
        // const teams = []
        //
        // for (let i = 0; i < this.managers.length; i++) {
        //     for (let j = 0; j < this.managers[i].project.length; j++) {
        //         teams.push(this.managers[i].project[j].team)
        //     }
        // }
        // return teams
        console.log(this);
        return this.findValuesWithkey(this.managers, 'team');
    }
}
class Managers {
    constructor(_mName) {
        this._mName = _mName;
        this.project = [];
    }
    addProject(project) {
        if (project) {
            this.project.push(project);
        }
        return this.project;
    }
    getAllProjects() {
        return this.project;
    }
    getTeams() {
        const teams = [];
        for (let i = 0; i < this.project.length; i++) {
            teams.push(this.project[i].team);
        }
        return teams;
    }
    getDevs(value = this.project) {
        // const devs = []
        // for (let i = 0; i < this.project.length; i++) {
        //     for (let j = 0; j < this.project[i].team.length; j++) {
        //         devs.push(this.project[i].team[j].dev)
        //     }
        // }
        // return devs
    }
}
class Project {
    constructor(_pName) {
        this._pName = _pName;
        this.team = [];
    }
    getAllTeamLeads() {
        return this.team;
    }
    addTeam(teamLead) {
        if (teamLead) {
            this.team.push(teamLead);
        }
        return this.team;
    }
    getDevelopers() {
        let dev = [];
        for (let i = 0; i < this.team.length; i++) {
            dev.push(this.team[i].dev);
        }
    }
}
class TeamLead {
    constructor(_tName) {
        this._tName = _tName;
        this.dev = [];
    }
    getAllDevelopers() {
        return this.dev;
    }
    addDeveloper(dev) {
        if (dev) {
            this.dev.push(dev);
        }
        return this.dev;
    }
}
class Developer {
    constructor(_devName) {
        this._devName = _devName;
    }
}
const developer1 = new Developer('first Developer');
const teamLead1 = new TeamLead("first TeamLead");
const project1 = new Project('first Project');
const manager1 = new Managers('first Manager');
const director1 = new Director('first Director');
const developer2 = new Developer('second Developer');
const teamLead2 = new TeamLead("second TeamLead");
const project2 = new Project('second Project');
const manager2 = new Managers('second Manager');
const director2 = new Director('second Director');
teamLead1.addDeveloper(developer1);
project1.addTeam(teamLead1);
manager1.addProject(project1);
director1.addManager(manager1);
teamLead1.addDeveloper(developer2);
project1.addTeam(teamLead2);
manager1.addProject(project2);
director1.addManager(manager1);
console.log(director1.getTeams());
//============================================================================
// const data = [
//     {
//         name: 'Vardan',
//         managers: [
//             {
//                 name: 'Karen',
//                 projects: [
//                     {
//                         name: 'PADC Website',
//                         teamLead: {
//                             name: 'Rado Poghossian'
//                         }
//                     }
//                 ]
//             },
//             {
//                 name: 'Karen',
//                 projects: [
//                     {
//                         name: 'PADC Website back-end',
//                         teamLead: {
//                             name: 'Vardan Vardanyan'
//                         }
//                     },
//                     {
//                         name: 'Music publishing back-end',
//                         teamLead: {
//                             name: 'Suren Vardanyan'
//                         }
//                     }
//                 ]
//             }
//         ]
//     }
// ]
// @ts-ignore
// function findValuesWithkey(arr, argKey) {
//     const filteredData = [];
//     for (const item of arr) {
//         for (const key in item) {
//             if (key === argKey) {
//                 filteredData.push(item[key]);
//             }
//             if (typeof item[key] === 'object') {
//                 if (Array.isArray(item[key])) {
//                     filteredData.push(...findValuesWithkey(item[key], argKey))
//                 } else {
//                     filteredData.push(...findValuesWithkey([item[key]], argKey))
//                 }
//             }
//         }
//     }
//     return filteredData;
// }
//
//
// const filteredData = findValuesWithkey(data, 'projects');
//
// console.log('filteredData', filteredData);
//==========================================================================
// const obj1 = {
//     position: "Developer",
//     name: 'Armen',
//     managers: {
//         name: 'Valod',
//         position: "Manager",
//         developer:{
//             name:'Karush'
//         }
//     }
// }
// @ts-ignore
// function copyObj(objc) {
//     let obj = {}
//
//     for (const obj1Key in objc) {
//         // @ts-ignore
//         if (typeof objc[obj1Key] === 'object') {
//             // @ts-ignore
//             obj[obj1Key] = copyObj(objc[obj1Key])
//         }else {
//             // @ts-ignore
//             obj[obj1Key] = objc[obj1Key]
//         }
//     }
//
//     return obj
// }
//
//
//
// // @ts-ignore
// const obj3 = copyObj(obj1)
// // @ts-ignore
// console.log(obj3)
// const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// @ts-ignore
// function fibonacci1(numb) {
//     const fib = []
//     let firstNumb = 0
//     let secondNumb = 1
//     let thirdNum = firstNumb + secondNumb
//
//     fib.push(firstNumb)
//     fib.push(secondNumb)
//
//     for (let i = 2; i < numb && numb > thirdNum; i++) {
//         fib.push(thirdNum)
//         firstNumb = secondNumb
//         secondNumb = thirdNum
//         thirdNum = firstNumb + secondNumb
//
//     }
//     return fib
// }
//
// const fib = fibonacci1(13)
//=====================================================================================
// @ts-ignore
// const fibonacci = () => {
//     let firstNumb = 0
//     let secondNumb = 1
//     let thirdNum = firstNumb + secondNumb
//     const fib: number[] = [0, 1]
//
//     return function fubon(n: number, i = 2): any {
//         if (n > thirdNum && i < n) {
//             fib.push(thirdNum)
//             firstNumb = secondNumb
//             secondNumb = thirdNum
//             thirdNum = firstNumb + secondNumb
//             // @ts-ignore
//             fubon(n, i + 1)
//         }
//         return fib
//     }
//
//
// };
// console.log(fibonacci()(9))
// function fibonacci2(num) {
//     if (num < 2) {
//         return num;
//     } else {
//         return fibonacci2(num - 1) + fibonacci2(num - 2);
//     }
// }
