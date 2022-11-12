
// function func() {
//     return new Promise((resolve, reject) => {
//         setTimeout(reject, 0, 9)
//     })
// }
//
// const promise = func()
// promise.then((res) => {
//     console.log(res)
// }).catch((rej) => {
//     console.log(rej, 'catch')
// })

//==============================================

// function random(cb: (name:string) => void) {
//     console.log('barev inche e qo anun@')
//     const name = 'Armen'
//     cb(name)
// }
//
//
// setTimeout(random, 0,function (n:string){
//     console.log('barev ' + n)
// })

// console.log(1)
//
// function setTime(cb: () => void) {
//     setTimeout(cb, 0)
// }
//
// setTime(function () {
//     console.log(2)
// })
// console.log(3)

//=============================================

//
// const url = 'https://nairihar-js-youtube-tutorials.herokuapp.com/v1/weather';
// // @ts-ignore
//
// const aaa = async () => {
//
//     // @ts-ignore
//     const data = await fetch(url).then((data) => JSON.parse(data))
//     console.log(data)
// }
// aaa()


// function getWeatherDataList() {
//     const data = fetch(url).then(()=>{
//         console.log(data)
//     })
// }
// getWeatherDataList()


// console.log(prom.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }))

//=================================
//
// const promise = new Promise((resolve, reject) => {
//     const successTypes = [true, false];
//     const randomNumber = Math.random();
//     const randomIndex = Math.floor(randomNumber * (successTypes.length - 1)); // 0, 1
//     let isSuccess = successTypes[randomIndex];
//     console.log("randomIndex", randomIndex, randomNumber);
//     const success = isSuccess;
//     const data = {
//         name: "Vardan",
//         surname: "Karen"
//     };
//     const promiseData = {
//         success,
//         data
//     };
//     if (isSuccess) {
//         resolve(promiseData);
//     } else {
//         reject(promiseData);
//     }
// });
//
// // @ts-ignore
// // @ts-ignore
// promise
//     //
//     .then(({ data, success }) => {
//         console.log(data, success);
//     })
//     .catch((err) => {
//         console.error(err.success);
//         console.error(err.data);
//     });

//===================================================

// const promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('second');
//     },10000)
// })
//
// const promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('first');
//     },5000)
// })
//
// function log(){
//     promise2.then((v)=>{
//         console.log('v',v);
//         return promise
//     })
//         .then(d=>{
//             console.log('d',d);
//         })
// }
//
// log();

//======================================================
// const promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('second');
//     },10000)
// })
//
// const promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('first');
//     },5000)
// })
//
// async function log(){
//     const v = await promise2;
//     console.log('v',v);
//
//     const d = await promise;
//
//     console.log('d',d);
// }
//
// log();
//==================================================
// function returnPromise(argNum: number) {
//
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(argNum);
//         }, 3000)
//     });
//
// }
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(async (element) => {
//     const d = await returnPromise(element);
//     console.log('d', d);
// });

// for (let item of arr) {
//     async function f() {
//         const d = await returnPromise(item);
//         console.log('d', d);
//     }
//         f()
// }

// Closure
//=========================

// let x = 5
//
// function f() {
//     console.log(x)
// }
// function f1() {
//    let x = 6;
//     f()
// }
// f1()

let x = 7;

function f(y: number) {
    return x + y
}

function f1(f3: (n: number) => number) {
    let x = 99
    return f3(4)
}

console.log(f1(f)
)
