class calculation {
    
    constructor(height, weight, heightType, weightType, inchValue) {
        this.height = height;
        this.weight = weight;
        this.heightType = heightType;
        this.weightType = weightType;
        this.inchValue = inchValue;
        if (this.heightType == 'feet'){
            this.height = this.height * 0.3048 + inchValue * 0.0254;
        }
        else if(this.heightType == 'cm'){
            this.height = this.height/100;
        }

        if(this.weightType == 'lbs'){
            this.weight = this.weight * 0.453592;
        }
    }

    calculate(){
        document.getElementById('bmi').value = (this.weight / (this.height * this.height));
    }



}

function selectedHeight(){
    let selectedHeightUnit = document.getElementById('heightId').value;
    if(selectedHeightUnit == 'feet'){
        document.getElementById('inches').style.display = "block";
        document.getElementById('height').placeholder = "feet";
    }
    else if (selectedHeightUnit == 'm'){
        document.getElementById('inches').style.display = "none";
        document.getElementById('height').placeholder = "metres";
    }
    else if (selectedHeightUnit == 'cm'){
        document.getElementById('inches').style.display = "none";
        document.getElementById('height').placeholder = "centimetres";
    }
}

function selectedWeight(){
    let selectedWeightUnit = document.getElementById('weightId').value;
    if(selectedWeightUnit == 'lbs'){
        document.getElementById('weight').placeholder = "lbs";
    }
    else{
        document.getElementById('weight').placeholder = "kgs";
    }
}

function calculateButton(){
    let heightType = document.getElementById('heightId').value;
    let weightType = document.getElementById('weightId').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let inchValue = document.getElementById('inches').value;
    let calc = new calculation(height,weight,heightType,weightType,inchValue);
    calc.calculate();
}
// Weight in kg / Height in metres squared

