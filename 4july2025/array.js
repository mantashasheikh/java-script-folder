// find the sum of all element

let number = [2,4,6,8,10]
let sum = 0
for(let i=0; i<number.length;i++){
    sum = number[i]+sum
}
console.log(sum)

// find the maximum number in an array
// let arr = [3,7,2,9,5]
// let max = 0
// for (let i=0; i<arr.length ; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max) 


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
let list2 =[] 
for(let i=list.length-1; i>=0; i--){
  list2.push(list[i])
}
console.log(list2)

// check if an element exist
let list3 = [3,5,7,9,11]
for(let i=0 ; i<list3.length ; i++){
    if(list3[i]==9){
        console.log("yes, 9 is present in the array")
    }
    
}


// merge two arrays without using concat method
let arr1= [1,2,3] 
let arr2 = [4,5,6]
for(let i=0 ; i<arr2.length ; i++){
    arr1.push(arr2[i])
}
console.log(arr1)

// arrange the array element in ascending order
let arr = [5, 2, 8, 1, 3];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("Sorted array in ascending order:", arr);




