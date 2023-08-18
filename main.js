// get the area of triangle
document.getElementById('triangle-btn').addEventListener('click', function() {
    const base = document.getElementById('triangle-base');
    const baseValue = parseFloat(base.value);
    const height = document.getElementById('triangle-height');
    const heightValue = parseFloat(height.value);

    const area = 0.5 * baseValue * heightValue;

    const showResult = document.getElementById('triangle-area');
    showResult.innerText = area.toFixed(2);

    baseValue = "";
    heightValue = "";
})

// get the area of rectangle
document.getElementById('rectangle-btn').addEventListener('click', function() {
    const width = document.getElementById('rectangle-width');
    const widthValue = parseFloat(width.value);

    const height = document.getElementById('rectangle-height');
    const heightValue = parseFloat(height.value);

    const area = widthValue * heightValue;
    
    const showResult = document.getElementById('rectangle-area');

    showResult.innerText = area.toFixed(2);

    widthValue = "";
    heightValue = "";
})

// // get the area of parallelogram 
function parallelogramArea() {
    const base = document.getElementById('parallelogram-base');
    const baseValue = parseFloat(base.value);

    const height = document.getElementById('parallelogram-height');
    const heightValue = parseFloat(height.value);

    const area = baseValue * heightValue;

    const showResult = document.getElementById('parallelogram-area');

    showResult.innerText = area.toFixed(2);

    baseValue = "";
    heightValue = "";
}


// // get the area of rhombus
function rhombusArea() {
    const diameter1 = document.getElementById('rhombus-dia1');
    const diameter1Value = parseFloat(diameter1.value);

    const diameter2 = document.getElementById('rhombus-dia2');
    const diameter2Value = parseFloat(diameter2.value);

    const area = 0.5 * diameter1Value * diameter2Value;

    const showResult = document.getElementById('rhombus-area');

    showResult.innerText = area.toFixed(2);

    diameter1Value = "";
    diameter2Value = "";
}

// // get the area of pentagon
function pentagonArea() {
    const perimeter = document.getElementById('pentagon-peri');
    const perimeterValue = parseFloat(perimeter.value);

    const sideLength = document.getElementById('pentagon-side-length');
    const sideLengthValue = parseFloat(sideLength.value);

    const area = 0.5 * perimeterValue * sideLengthValue;

    const showResult = document.getElementById('pentagon-area');
    showResult.innerText = area.toFixed(2);

    perimeterValue = "";
    sideLengthValue = "";
}

// // get the area of ellipse
function ellipseArea() {
    const aAxis = document.getElementById('ellipse-axis1');
    const aAxisValue = parseFloat(aAxis.value);

    const bAxis = document.getElementById('ellipse-axis2');
    const bAxisValue = parseFloat(bAxis.value);

    area = 3.14 * aAxisValue * bAxisValue;

    const showResult = document.getElementById('ellipse-area');

    showResult.innerText = area.toFixed(2);

    aAxisValue = "";
    bAxisValue = "";
}













