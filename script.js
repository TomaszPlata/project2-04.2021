let string = ['Volvo', 'Audi', 'Mercedes', 'BMW'];
let date1 = new Date();

function showCars() {
    document.getElementById('cars').innerHTML = string;
    document.getElementById('date').innerHTML = date1;
}