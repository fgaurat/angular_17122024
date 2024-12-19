const getTodo = (id) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = {
        id, // shorthand property notation
        title: `Todo id ${id}`, // template string
        completed: false,
      };
      resolve(todo);
    }, 1000);
  });

  return p;
};

// const pTodo = getTodo(1);
// pTodo
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   });

// const pTodo1 = getTodo(1);
// const pTodo2 = getTodo(2);
// const pTodo3 = getTodo(3);
// const pTodo4 = getTodo(4);

// Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then(arr => console.log(arr))

// async function main()

const hello = (name)=>`Hello ${name}`
const main = async ()=>{


    const todo1 = await getTodo(1);
    console.log(todo1)
    
    const todo2 = await getTodo(2);
    console.log(todo2)
    
    const todo3 = await getTodo(3);
    console.log(todo3)
    
    const todo4 = await getTodo(4);
    console.log(todo4)

    r = hello("fred")
    console.log(r)
}   

// main()



const arr = [10,20,30,40,50]

// const a = arr[0]
// const b = arr[1]
const [a,b] = arr
console.log(a,b)



function f(...p){
    console.log(p)
}

f(1,2)
f(1,2,5,6)
f(1)
// const arr = [10,20,30,40,50]
//... spread operator
const [a1,b1,...d1] = arr
console.log(a1,b1,d1)

const o = {
    name:"GAURAT",
    firstName:"Fred",
    job:"dev",
    age:22
}
// o = {value:"toto"}

// o.age = 48
// console.log(o)
// const o1 = {...o,age:48}
// console.log(o1)

const v = "2"
console.log(v,typeof(v))