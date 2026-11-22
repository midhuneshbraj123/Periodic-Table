var elements = [
    { number: "1", symbol: "H", name: "Hydrogen", info: "Hydrogen is the lightest element in the universe and a flammable gas." },
    { number: "2", symbol: "He", name: "Helium", info: "Helium is a noble gas used to fill party balloons and make your voice high!" },
    { number: "3", symbol: "Li", name: "Lithium", info: "Lithium is a soft alkali metal used in rechargeable smartphone batteries." },
    { number: "4", symbol: "Be", name: "Beryllium", info: "Beryllium is a rare metal used in aerospace parts and X-ray machines." },
    { number: "5", symbol: "B", name: "Boron", info: "Boron is a metalloid used to make heat-resistant glass and fiberglass." },
    { number: "6", symbol: "C", name: "Carbon", info: "Carbon forms the chemical basis of all known organic life on Earth." },
    { number: "7", symbol: "N", name: "Nitrogen", info: "Nitrogen makes up about 78% of Earth's atmosphere." },
    { number: "8", symbol: "O", name: "Oxygen", info: "Oxygen is a reactive gas that is essential for human respiration." },
    { number: "9", symbol: "F", name: "Fluorine", info: "Fluorine is a highly reactive gas commonly added to toothpaste." },
    { number: "10", symbol: "Ne", name: "Neon", info: "Neon is a noble gas that glows brightly red-orange in electric signs." }
];

// Grab HTML elements using basic JavaScript DOM methods
var tableBox = document.getElementById("table-box");
var detailsParagraph = document.getElementById("details");

// Simple loop to create cards for each of the 10 elements
for (var i = 0; i < elements.length; i++) {
    var currentElement = elements[i];

    // Create a new div element
    var card = document.createElement("div");
    card.className = "element-card";

    // Add HTML content inside the card
    card.innerHTML = "<h3>" + currentElement.symbol + "</h3>" +
                     "<p>" + currentElement.number + "</p>" +
                     "<p>" + currentElement.name + "</p>";

    // Add a click event listener to show element details
    card.onclick = (function(elData) {
        return function() {
            detailsParagraph.innerHTML = "<strong>" + elData.name + " (" + elData.symbol + ")</strong><br>" + elData.info;
        };
    })(currentElement);

    // Put the card into the table box container
    tableBox.appendChild(card);
}