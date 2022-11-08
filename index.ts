// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0;
//         return {
//             next() {
//                 i++;
//                 return (i < n) ? {
//                     value: i,
//                     done: false
//                 } : {
//                     value: undefined,
//                     done: true
//                 }
//
//
//             }
//         }
//     }
// }
// const iter = iterator.gen()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// @ts-ignore

// const obj = {
//     name: "Barev",
//     lName: "Hajox",
//     [Symbol.iterator]() {
//         // @ts-ignore
//         return {
//             next(): { value: number; done: boolean } | { value: undefined; done: boolean } {
//                 return  { value: 1, done: true }
//             }
//         }
//     }
// }
// // @ts-ignore
// for (let i of iterator) {
//     console.log(i)
// }

// const arr: Array<number> = [];
//
// arr.push(10);
//
// for (let item of arr) {
//     console.log(item);
// }

// const object = {
//     start: 10,
//     end: 20,
//     [Symbol.iterator]: function () {
//         // @ts-ignore
//         const arr = Object.values(object)
//         let ind = -1;
//         return {
//             next: () => {
//                 let done = ind === arr.length - 1;
//
//                 if (ind <= arr.length){
//                     ind++
//                     return {
//                         value: arr[ind],
//                         done
//                     }
//                 }
//                 console.log(done)
//                 ++ind;
//                 return {
//                     value: undefined,
//                     done
//                 }
//
//             }
//         }
//     }
// }
// @ts-ignore
// const aa = Object.values(object)
// console.log(aa)

// for (let item of object) {
//     console.log(item, 'item');
// }

// console.log(object)

// console.log([...object]);
// console.log({...object})


//==================================================================================


const obj = {
    1: 4,
    2: 6,
    3: 10,
    [Symbol.iterator]() {
        // @ts-ignore
        const values = Object.values(obj)
        values.pop()
        let i = 0
        let done = false

        return {
            next() {
                done = i === values.length - 1

                if (i < values.length && typeof values[i + 1] !== "undefined" && typeof values[i + 2] !== "undefined") {
                    return {
                        value: values[i + 1] + values[i++ + 2],
                        done
                    }
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

for (const objElement of obj) {
    console.log(objElement)
}


//=========================================================================

