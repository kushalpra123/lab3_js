function ToyCar(name, brand, color, year, price, material, features) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.price = price;
    this.material = material;
    this.features = features;

}
const form = document.getElementById("carForm");
const carList = document.getElementById("carList");
let cars = [];


form.addEventListener("submit", function(event) {
    // preventDefault stops the page from reloading on form submission
    event.preventDefault();
    const car = new ToyCar(
        document.getElementById("name").value,
        document.getElementById("brand").value,
        document.getElementById("color").value,
        document.getElementById("year").value,
        document.getElementById("price").value,
        document.getElementById("material").value,
        document.getElementById("features").value.split(","),
    );
        cars.push(car);
    displayCars();
    form.reset();
});
// Display cars
function displayCars() {
    carList.innerHTML = "";

    cars.forEach(function(car) {
        const card = document.createElement("div");
        card.className = "car-card";

        card.innerHTML = `
            <h3>${car.name}</h3>
            <p><strong>Brand:</strong> ${car.brand}</p>
            <p><strong>Color:</strong> ${car.color}</p>
            <p><strong>Year:</strong> ${car.year}</p>
            <p><strong>Price:</strong> $${car.price}</p>
            <p><strong>Material:</strong> ${car.material}</p>
            <p><strong>Features:</strong> ${car.features.join(", ")}</p>
        `;

        carList.appendChild(card);
    });
}