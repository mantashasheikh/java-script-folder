function run(){
    let num1 = parseInt(prompt("enter first number: "))
    let num2 = parseInt(prompt("enter second number: "))
    let operator = prompt("enter an operator(+ , - , * ): ")
    if(operator=="+"){
         window.alert(num1+num2)
    }
    else if(operator=="-"){
        window.alert(num1-num2)
    }
    else if(operator=="*"){
        window.alert(num1*num2)
    }
    else{
        window.alert("this operator is not available")
    }

}


let arr = [2,4,5,3,1]
let max = 0
for(let i=0 ; i<=arr.length ; i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log("the maximum nuber in an array is",max)

let num1 = 123456
let ans = num1
if(num1>0){
    let rem = num1 % 10
    let rev =  

}
 







