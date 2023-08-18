// get the area of triangle
document.getElementById('triangle-btn').addEventListener('click', function() {
    const base = document.getElementById('triangle-base');
    const baseValue = parseFloat(base.value);

    const height = document.getElementById('triangle-height');
    const heightValue = parseFloat(height.value);

    // validate input
    if(isNaN(baseValue) || isNaN(heightValue)) {
        alert("Please provide number as input");
        return;
    }

    const area = 0.5 * baseValue * heightValue;

    const showResult = document.getElementById('triangle-area');
    showResult.innerText = area.toFixed(2);

     // set at calculation part
     addToCalculationEntry('Triangle', area)

    // clear the input field
    baseValue = "";
    heightValue = "";
})

// get the area of rectangle
document.getElementById('rectangle-btn').addEventListener('click', function() {
    const width = document.getElementById('rectangle-width');
    const widthValue = parseFloat(width.value);

    const height = document.getElementById('rectangle-height');
    const heightValue = parseFloat(height.value);

    // validate input
    if(isNaN(widthValue) || isNaN(heightValue)) {
        alert("Please provide number as input");
        return;
    }

    const area = widthValue * heightValue;
    
    const showResult = document.getElementById('rectangle-area');

    showResult.innerText = area.toFixed(2);

     // set at calculation part
     addToCalculationEntry('Rectangle', area)

     // clear the input field
    widthValue = "";
    heightValue = "";
})

// // get the area of parallelogram 
function parallelogramArea() {
    const base = document.getElementById('parallelogram-base');
    const baseValue = parseFloat(base.value);

    const height = document.getElementById('parallelogram-height');
    const heightValue = parseFloat(height.value);

    // validate input
    if(isNaN(baseValue) || isNaN(heightValue)) {
        alert("Please provide number as input");
        return;
    }

    const area = baseValue * heightValue;

    const showResult = document.getElementById('parallelogram-area');

    showResult.innerText = area.toFixed(2);

     // set at calculation part
     addToCalculationEntry('Parallelogram', area)

     // clear the input field
    baseValue = "";
    heightValue = "";
}


// // get the area of rhombus
function rhombusArea() {
    const diameter1 = document.getElementById('rhombus-dia1');
    const diameter1Value = parseFloat(diameter1.value);

    const diameter2 = document.getElementById('rhombus-dia2');
    const diameter2Value = parseFloat(diameter2.value);

    // validate input
    if(isNaN(diameter1Value) || isNaN(diameter2Value)) {
        alert("Please provide number as input");
        return;
    }

    const area = 0.5 * diameter1Value * diameter2Value;

    const showResult = document.getElementById('rhombus-area');

    showResult.innerText = area.toFixed(2);

    // set at calculation part
    addToCalculationEntry('rhombus', area)

    // clear the input field
    diameter1Value = "";
    diameter2Value = "";
}

// // get the area of pentagon
function pentagonArea() {
    const perimeter = document.getElementById('pentagon-peri');
    const perimeterValue = parseFloat(perimeter.value);

    const sideLength = document.getElementById('pentagon-side-length');
    const sideLengthValue = parseFloat(sideLength.value);

    // validate input
    if(isNaN(perimeterValue) || isNaN(sideLengthValue)) {
        alert("Please provide number as input");
        return;
    }

    const area = 0.5 * perimeterValue * sideLengthValue;

    const showResult = document.getElementById('pentagon-area');
    showResult.innerText = area.toFixed(2);

    // set at calculation part
    addToCalculationEntry('Pentagon', area)

    // clear the input field
    perimeterValue = "";
    sideLengthValue = "";
}

// // get the area of ellipse
function ellipseArea() {
    const aAxis = document.getElementById('ellipse-axis1');
    const aAxisValue = parseFloat(aAxis.value);

    const bAxis = document.getElementById('ellipse-axis2');
    const bAxisValue = parseFloat(bAxis.value);

    // validate input
    if(isNaN(aAxisValue) || isNaN(bAxisValue)) {
        alert("Please provide number as input");
        return;
    }

    area = 3.14 * aAxisValue * bAxisValue;

    addToCalculationEntry("Ellipse", area);

    const showResult = document.getElementById('ellipse-area');

    showResult.innerText = area.toFixed(2);

    // set at calculation part
    addToCalculationEntry('Ellipse', area)

    // clear the input field
    aAxisValue = "";
    bAxisValue = "";
}


// add to calculation entry
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // p.innerHTML = area + " cm<sup>2</sup>";
    p.classList.add('my-4')
    p.innerHTML = `<span>${count + 1}. ${areaType}</span> <span>${area}</span> cm<sup>2</sup> <button class="btn btn-success">Convert To M<sup>2</sup></button>`;
    // p.style.display = "flex";
    // p.style.justifyContent = "space-between";

    calculationEntry.appendChild(p);

}













