function object_Function() {
    let car = {
        make: "Toyota",
        model: "Tacoma",
        year: 2022,
        description: function () {
            return this.year + " " + this.make + " " + this.model;
        }
    };

    document.getElementById("Object").innerHTML = car.description();
}
