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
// class Director {
//     public managers: Managers[] = []
//
//     constructor(readonly _dName: string) {
//
//     }
//
//     addManager(manager: Managers) {
//         if (manager) {
//             this.managers.push(manager)
//         }
//         return this.managers
//     }
//
//     getAllManagers() {
//         return this.managers
//     }
//
//
//     getProjects() {
//         const projects = []
//
//         for (let i = 0; i < this.managers.length; i++) {
//             projects.push(this.managers[i].project)
//         }
//         return projects
//     }
//
//     getTeams(managers = this.managers) {
//         const teams = []
//
//         for (let i = 0; i < managers.length; i++) {
//             if (managers) {
//
//             }
//             for (let j = 0; j < managers[i].project.length; j++) {
//                 teams.push(managers[i].project[j].team)
//             }
//         }
//         return teams
//     }
// }
//
// class Managers {
//     project: Project[] = []
//
//     constructor(public _mName: string) {
//
//     }
//
//     addProject(project: Project) {
//         if (project) {
//             this.project.push(project)
//         }
//         return this.project
//     }
//
//     getAllProjects() {
//         return this.project
//     }
//
//     getTeams() {
//         const teams = []
//         for (let i = 0; i < this.project.length; i++) {
//             teams.push(this.project[i].team)
//         }
//         return teams
//     }
//
//     getDevs() {
//         const devs = []
//         for (let i = 0; i < this.project.length; i++) {
//             for (let j = 0; j < this.project[i].team.length; j++) {
//                 devs.push(this.project[i].team[j].dev)
//             }
//         }
//         return devs
//     }
//
// }
//
// class Project {
//     team: TeamLead[] = []
//
//     constructor(readonly _pName: string) {
//
//     }
//
//     getAllTeamLeads() {
//         return this.team
//     }
//
//     addTeam(teamLead: TeamLead) {
//         if (teamLead) {
//             this.team.push(teamLead)
//         }
//         return this.team
//     }
//
//     getDevelopers() {
//         let dev = []
//         for (let i = 0; i < this.team.length; i++) {
//             dev.push(this.team[i].dev)
//         }
//     }
//
// }
//
// class TeamLead {
//     dev: Developer[] = []
//
//     constructor(readonly _tName: string) {
//
//     }
//
//     getAllDevelopers() {
//         return this.dev
//     }
//
//     addDeveloper(dev: Developer) {
//         if (dev) {
//             this.dev.push(dev)
//         }
//         return this.dev
//     }
//
// }
//
// class Developer {
//
//     constructor(readonly _devName: string) {
//
//     }
//
// }
//
// const developer1 = new Developer('first Developer')
// const teamLead1 = new TeamLead("first TeamLead")
// const project1 = new Project('first Project')
// const manager1 = new Managers('first Manager')
// const director1 = new Director('first Director')
//
//
// teamLead1.addDeveloper(developer1)
// project1.addTeam(teamLead1)
// manager1.addProject(project1)
// director1.addManager(manager1)
// console.log(director1.getTeams())
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
let firstNumb = 0;
let secondNumb = 1;
let thirdNum = firstNumb + secondNumb;
// @ts-ignore
const fibonacci = (n, i = 2) => {
    const fib = [];
    fib.push(firstNumb);
    if (n > thirdNum && i < n) {
        fib.push(thirdNum);
        firstNumb = secondNumb;
        secondNumb = thirdNum;
        thirdNum = firstNumb + secondNumb;
        fib.push(...fibonacci(n, i + 1));
    }
    return fib;
};
console.log(fibonacci(5));
// function fibonacci2(num) {
//     if (num < 2) {
//         return num;
//     } else {
//         return fibonacci2(num - 1) + fibonacci2(num - 2);
//     }
// }
