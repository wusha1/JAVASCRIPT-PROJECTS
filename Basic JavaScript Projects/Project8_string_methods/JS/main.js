function useSlice() {
    var text = "Learning JavaScript is fun and powerful.";

    // slice() extracts part of the string
    var result = text.slice(9, 19);

    // Displays the sliced section
    document.getElementById("Slice_Result").innerHTML = result;
}
