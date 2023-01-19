
function add(num1, num2){
    return num1+num2;
}

let subtract = function(num1, num2){
    return (+num1) - (+num2);
}

let multiply = (num1,num2) => +num1 * +num2; 

let divide = function(num1, num2){
    try{
        return (+num1)/(+num2);
    }catch(Error){
        alert(' Arithmetic error ')
    }
}