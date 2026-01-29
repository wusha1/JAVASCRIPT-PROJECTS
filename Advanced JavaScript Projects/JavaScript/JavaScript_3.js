function showData(element) {
    let animal = element.getAttribute("data-animal");
    let sound = element.getAttribute("data-sound");

    alert("The " + animal + " says " + sound + "!");
}
