let arr = [-5,10,20,-3,7]
let sum = 0
for(let i=0; i<=arr.length ;i++ ){
    if(arr[i]>=0){
        sum+=arr[i]
    }
}
console.log(`sum of all positive number in an array is: ${sum}`)