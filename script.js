let string = ['Volvo', 'Audi', 'Mercedes', 'BMW'];
let months = ['March', 'April', 'May', 'June'];
let date1 = new Date();

function showCars() {
    document.getElementById('cars').innerHTML = string;
    document.getElementById('date').innerHTML = date1;
}

function howLive() {
    document.getElementById('life').style.cursor = pointer;
}