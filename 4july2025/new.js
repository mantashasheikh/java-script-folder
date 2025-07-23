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