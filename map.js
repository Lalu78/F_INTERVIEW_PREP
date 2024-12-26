// what is map?

// Map method is use for create new array from existing one by appling function to each one of the emenlent of the ther first array

const nums =[1,2,3,4,5]

const multiplyThree=nums.map((num,i,arr)=>{
    return num*3
})
console.log(multiplyThree)