function animal_Function() {
    let animal;
    let animal_choice = document.getElementById("Animal_Input").value;

    switch (animal_choice) {
        case "Dog":
            animal = "Dogs are loyal and friendly.";
            break;
        case "Cat":
            animal = "Cats are independent and curious.";
            break;
        case "Bird":
            animal = "Birds are colorful and love to sing.";
            break;
        default:
            animal = "Please enter Dog, Cat, or Bird.";
    }

    document.getElementById("Output").innerHTML = animal;
}
