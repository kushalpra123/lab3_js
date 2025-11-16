function ToyCar(name, brand, color, year, price, material, features, imageURL) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.price = price;
    this.material = material;
    this.features = features;
    this.imageURL = imageURL;
}
const form = document.getElementById("carForm");
const carList = document.getElementById("carList");
let cars = [];

// Add car
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
        document.getElementById("image").value
    );
        cars.push(car);
    displayCars();
    form.reset();
});