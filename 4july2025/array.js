// find the sum of all element

let number = [2,4,6,8,10]
let sum = 0
for(let i=0; i<number.length;i++){
    sum = number[i]+sum
}
console.log(sum)

// find the maximum number in an array
let arr = [3,7,2,9,5]
let max = 0
for (let i=0; i<arr.length ; i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max) 


// count even and odd

let a = [1,2,3,4,5,6,7,8,9]
let even = 0
let odd = 0
for(let i=0; i<a.length ; i++){
    if(a[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
console.log("total number of even :",even)
console.log("total number of odd:",odd)


// reverse an array

let list = [10,20,30,40,50]
list.slice[0,-1]



