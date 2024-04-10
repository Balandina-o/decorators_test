// export class Demo {
//     @Max(10)
//     exec(a: number) {
//         console.log(a);
//     }
// }

// function Max(num: number) {
//     return function <This, Args extends any[], Return>(
//         target: (this: This, ...args: Args) => Return,
//         context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
//     ) {
//           return function(this: This, ...args: Args): Return {
//                 if (args[0] > num) {
//                     throw new Error(`Значение больше ${num}`)
//                 }
//                const res = target.call(this, ...args);
//               return res;
//             }
//     }
// } 

export {}

