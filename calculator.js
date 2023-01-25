let globalBuffer1 = 0;
let bufferSymbol;
let newNum;
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

function appendNum(num){   
    
    
        if(newNum == true){
            document.getElementById('fnum').innerText = 0;
            decimalPoint = false;
        }
            let temp = document.getElementById('fnum').innerText;
        if(temp == '0' && temp !='0.'){
            document.getElementById('fnum').innerText = num;
        }
        else if ((+temp + +num)>999999) {
            alert('Number limit exceeded');
            return;
        }
        else{
            document.getElementById('fnum').innerText = String(temp) + String(num);
        }
        newNum = false;
}

function reset(){
    document.getElementById('fnum').innerText = 0;
    bufferSymbol = null;
    globalBuffer1 = 90;
}

// function backspace(){
//     if(newNum == true){
//         document.getElementById('fnum').innerText = 0;
//     }
//     let temp = document.getElementById('fnum').innerText;
//     if(temp != 0 && temp != '0.'){
//         if(temp > 9 && decimalPoint == false)
//         document.getElementById('fnum').innerText = temp.substring(0,(temp.length-1));
//         else if(decimalPoint == true){
//             if(temp.charAt(temp.length) == '.'){
//                 document.getElementById('fnum').innerText = temp.substring(0,(temp.length-1));
//                 decimalPoint = false;
//             }
//             else{
//                 document.getElementById('fnum').innerText = temp.substring(0,(temp.length-1));
//             }
//         }
        
//         else{
//             document.getElementById('fnum').innerText = 0;
//             decimalPoint = false;
//         }
//     }
    
// }

function clickSymbol(symbol){
    if(globalBuffer1 != 0 && bufferSymbol != null){
        result();
        bufferSymbol = symbol;
    }
    else{
        globalBuffer1 = document.getElementById('fnum').innerText;
        bufferSymbol = symbol;
        newNum = true;
    }

}

function result(){

    let currentNum = Number(document.getElementById('fnum').innerText);
    let temp = 0;
    switch(bufferSymbol){
        case '-': {
            temp = (+globalBuffer1 - currentNum);
            break;
        }
        case '+': {
            temp = (+globalBuffer1 + currentNum);
            break;
        }
        case 'x': {
            temp = (+globalBuffer1 * currentNum);
            break;
        }
        case '/': {
            temp = (+globalBuffer1 / currentNum);
            break;
        }
        case '%': {
            temp = ((+globalBuffer1 * currentNum)/100);
            break;
        }
        case null: {
            return;
        }
    }
    if(document.getElementById('fnum').innerText == 'NaN'
    || document.getElementById('fnum').innerText == 'undefined'
    || document.getElementById('fnum').innerText == 'Infinity'){
        alert('invalid operation');
        reset();
    }
    bufferSymbol = null;
    newNum = true;
    document.getElementById('fnum').innerText = temp;
    globalBuffer1 = temp;
}

function square(){
    if(globalBuffer1 != 0 && bufferSymbol != null){
        result();
    }
    let temp = Math.pow(document.getElementById('fnum').innerText, 2); 
    document.getElementById('fnum').innerText = temp;
    bufferSymbol = null;
    newNum = true;
    globalBuffer1 = temp;
}

function addDecimal(){
    if(!document.getElementById('fnum').innerText.includes('.'))
        document.getElementById('fnum').innerText = document.getElementById('fnum').innerText.concat('.');
}

function relocateToHome(){
    location.replace('index.html');
}