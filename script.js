// console.log("First Line")
// setTimeout(()  => {

//     console.log("After 2 Sec")
// }, 2000);
// console.log("Second Line")
// setTimeout(()=>{
//     alert("Alert after 3 sec. !!")
// }, 3000);


// count=1
// const Timerid=setInterval(()=>{
//     console.log(count)
//     count+=1
// },1000)

// setTimeout(()=>{
//     clearInterval(Ti merid)
// },10*1000)

// const p=new Promise(function(resolve,reject){
//     resolve()
//     reject()
//     setTimeout(() => {
//         let done=false;
//         if(done){
//             resolve({name:"alex",age:34})
//         }else{
//             reject("network issue")
//         }
//     }, 5000)
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Finally Block")
// })

// function doHomework(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Homework is done")
//                 resolve("Homework complete")
//             }else{
//                 reject("Homework is not done")
//             }
//         }, 5000);
//     })
//     return p
// }

// function eatDinner(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Dinner is done")
//                 resolve("Dinner complete")
//             }else{
//                 reject("Dinner is not done")
//             }
//         }, 5000);
//     })
//     return p
// }

// function goToPlayground(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Went to the playground is done")
//                 resolve("playground complete")
//             }else{
//                 reject("Playground is not done")
//             }
//         }, 5000);
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).then


// function prepareFood(){
//     return new Promise (function(resolve,reject){
//        setTimeout(() => {
//         console.log("Food Ordered")
//         resolve("Food Ordered")
//        }, 1000);
//     })
// }

// function prepareFood(){
//     return new Promise (function(resolve,reject){
//        setTimeout(() => {
//         console.log("Food Prepared")
//         resolve("Food Prepared")
//        }, 1000);
//     })
// }

// function deliverFood(){
//     return new Promise (function(resolve,reject){
//        setTimeout(() => {
//         console.log("Food Delivered")
//         resolve("Food Delivered")
//        }, 1000);
//     })
// }

// orderFood().then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).catch((data)=>{
//  console.log(err)
// })
// async function order(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }
// order()
// console.log("First Line")
// console.log(sample)
// console.log("last line")

// console.log("first line")
// try{
//     // let sample = 324
//     let age = 19
//     if(age<18){
//         throw new Error("Access Denied")
//     }
//     console.log(sample)
// }catch(error){
//     comsole.log(error)
// }finally{
//     console.log("first block")
// }
// console.log("last line")

async function getData(){
try{
 const response = await fetch("https://dummyjson.com/products")
 console.log(response.ok)
 if(response.ok===false)throw new Error("Data not found")
  const data = await response.json()
  console.log(data)
}catch(error){
    console.log("Data not found")
}
}
getData()