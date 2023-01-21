let globalBuffer1 = 0;

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
        let temp = document.getElementById('fnum').innerText;
        
        if(temp == 0){
            document.getElementById('fnum').innerText = num;
        }
        else if ((+temp + +num)>999999) {
            alert('Number limit exceeded');
            return;
        }
        else{
            document.getElementById('fnum').innerText = String(temp) + String(num);
        }
}

function reset(){
    document.getElementById('fnum').innerText = 0;
}

function backspace(){
    let temp = document.getElementById('fnum').innerText;
    if(temp != 0){
        if(temp > 9)
        document.getElementById('fnum').innerText = temp.substring(0,(temp.length-1));
        else{
            document.getElementById('fnum').innerText = 0;
        }
    }
    
}