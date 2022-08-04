// const myfunc = (value)=>{
//     return console.log('hello world '+value)
// }

// myfunc('sree');

// const globalPlayer = [
// {  
//     id:1,
//     name: 'sreejith'
// },
// {
//     id:2,
//     name:'dinkan'
// },
// {   id:3,
//     name:'Arya'
// }
// ];

// for(i=0;i<globalPlayer.length;i++){
    // console.log(globalPlayer[i].name);
// }

// globalPlayer.forEach((value,index,array)=>
// {
//     return console.log(array);
// })

// const newArray = globalPlayer.map((value)=> value.id);
// console.log(newArray);

// const numArray = [10,58,8,79,7,8,75,8,74];

// const newArray = numArray.reduce((total, value)=>total+value,0)

// console.log(newArray);

//find

const globalPlayer = [
    {  
        id:1,
        name: 'sreejith'
    },
    {
        id:2,
        name:'dinkan'
    },
    {   id:3,
        name:'subru'
    },

]

const returnObj= globalPlayer.find((value)=> value.name==="sreejith");
console.log(returnObj);


