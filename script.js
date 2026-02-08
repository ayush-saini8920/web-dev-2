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

const p=new Promise(function(resolve,reject){
    // resolve()
    // reject()
    setTimeout(() => {
        let done=false;
        if(done){
            resolve({name:"alex",age:34})
        }else{
            reject("network issue")
        }
    }, 5000)
})
p.then((data)=>{
    console.log("Resolved",data)
}).catch((err)=>{
    console.log("Rejected",err)
}).finally(()=>{
    console.log("Finally Block")
})

function doHomework(){
    const p=new Promise(function(resolve,reject){
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Homework is done")
                resolve("Homework complete")
            }else{
                reject("Homework is not done")
            }
        }, 5000);
    })
    return p
}

function eatDinner(){
    const p=new Promise(function(resolve,reject){
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Dinner is done")
                resolve("Dinner complete")
            }else{
                reject("Dinner is not done")
            }
        }, 5000);
    })
    return p
}

function goToPlayground(){
    const p=new Promise(function(resolve,reject){
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Went to the playground is done")
                resolve("playground complete")
            }else{
                reject("Playground is not done")
            }
        }, 5000);
    })
    return p
}

doHomework().then((data)=>{
    console.log(data)
    return eatDinner()
}).then((data)=>{
    console.log(data)
    return goToPlayground()
}).then((data)=>{
    console.log(data)
}).then

