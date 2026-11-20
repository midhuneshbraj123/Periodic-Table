const categoryNames = {
    "nonmetal": "Reactive Nonmetal",
    "noble-gas": "Noble Gas",
    "alkali": "Alkali Metal",
    "alkaline": "Alkaline Earth Metal",
    "metalloid": "Metalloid",
    "transition": "Transition Metal",
    "post-trans": "Post-Transition Metal",
    "lanthanide": "Lanthanide",
    "actinide": "Actinide",
    "unknown": "Unknown Properties"
};

// All 118 Elements: [number, symbol, name, mass, category, state, row, col, summary]
const elementsData = [
    [1, "H", "Hydrogen", "1.008", "nonmetal", "Gas", 1, 1, "The lightest and most abundant element in the universe, fueling stars like our Sun."],
    [2, "He", "Helium", "4.0026", "noble-gas", "Gas", 1, 18, "A colorless, non-toxic inert gas used in party balloons and cooling MRI magnets."],
    [3, "Li", "Lithium", "6.94", "alkali", "Solid", 2, 1, "A soft, silvery metal famous for powering rechargeable phone and EV batteries."],
    [4, "Be", "Beryllium", "9.0122", "alkaline", "Solid", 2, 2, "A lightweight, strong metal used in aerospace components and X-ray windows."],
    [5, "B", "Boron", "10.81", "metalloid", "Solid", 2, 13, "Used to make heat-resistant borosilicate glass, fiberglass, and strong magnets."],
    [6, "C", "Carbon", "12.011", "nonmetal", "Solid", 2, 14, "The chemical backbone of all known life on Earth, forming diamonds, graphite, and DNA."],
    [7, "N", "Nitrogen", "14.007", "nonmetal", "Gas", 2, 15, "Makes up 78% of Earth's atmosphere and is essential for proteins and fertilizers."],
    [8, "O", "Oxygen", "15.999", "nonmetal", "Gas", 2, 16, "A highly reactive gas required for respiration in almost all living organisms."],
    [9, "F", "Fluorine", "18.998", "nonmetal", "Gas", 2, 17, "The most reactive element, commonly added to toothpaste to prevent cavities."],
    [10, "Ne", "Neon", "20.180", "noble-gas", "Gas", 2, 18, "Glows a bright reddish-orange when electricity passes through it in neon signs."],
    [11, "Na", "Sodium", "22.990", "alkali", "Solid", 3, 1, "A reactive metal that fizzes in water and combines with chlorine to make table salt."],
    [12, "Mg", "Magnesium", "24.305", "alkaline", "Solid", 3, 2, "Burns with a brilliant white flame and sits at the center of chlorophyll in plants."],
    [13, "Al", "Aluminum", "26.982", "post-trans", "Solid", 3, 13, "The most abundant metal in Earth's crust, prized for being lightweight and rust-proof."],
    [14, "Si", "Silicon", "28.085", "metalloid", "Solid", 3, 14, "The primary semiconductor material used to build computer chips and solar panels."],
    [15, "P", "Phosphorus", "30.974", "nonmetal", "Solid", 3, 15, "Essential for DNA and cell energy (ATP), and used on the striking surface of matchboxes."],
    [16, "S", "Sulfur", "32.06", "nonmetal", "Solid", 3, 16, "A bright yellow nonmetal found near volcanoes and used to vulcanize rubber."],
    [17, "Cl", "Chlorine", "35.45", "nonmetal", "Gas", 3, 17, "A yellow-green gas widely used to disinfect drinking water and swimming pools."],
    [18, "Ar", "Argon", "39.948", "noble-gas", "Gas", 3, 18, "Makes up nearly 1% of Earth's atmosphere and protects filaments inside lightbulbs."],
    [19, "K", "Potassium", "39.098", "alkali", "Solid", 4, 1, "An essential electrolyte for nerve signals and muscle function, found in bananas."],
    [20, "Ca", "Calcium", "40.078", "alkaline", "Solid", 4, 2, "Vital for building strong bones, teeth, and shells in living organisms."],
    [21, "Sc", "Scandium", "44.956", "transition", "Solid", 4, 3, "Used in lightweight aluminum alloys for aerospace parts and high-end bicycle frames."],
    [22, "Ti", "Titanium", "47.867", "transition", "Solid", 4, 4, "As strong as steel but 45% lighter; used in spacecraft and medical implants."],
    [23, "V", "Vanadium", "50.942", "transition", "Solid", 4, 5, "Added to steel to make ultra-tough tools, axles, and armor plating."],
    [24, "Cr", "Chromium", "51.996", "transition", "Solid", 4, 6, "Gives stainless steel its shine and resistance to corrosion."],
    [25, "Mn", "Manganese", "54.938", "transition", "Solid", 4, 7, "Essential for steel production and used in alkaline batteries."],
    [26, "Fe", "Iron", "55.845", "transition", "Solid", 4, 8, "The main ingredient in steel; carries oxygen in your blood via hemoglobin."],
    [27, "Co", "Cobalt", "58.933", "transition", "Solid", 4, 9, "Used to create vibrant cobalt-blue glass and high-capacity lithium-ion batteries."],
    [28, "Ni", "Nickel", "58.693", "transition", "Solid", 4, 10, "A corrosion-resistant metal used in coins, batteries, and stainless steel."],
    [29, "Cu", "Copper", "63.546", "transition", "Solid", 4, 11, "A reddish metal with superb electrical conductivity, used in wiring worldwide."],
    [30, "Zn", "Zinc", "65.38", "transition", "Solid", 4, 12, "Used to galvanize steel against rust and supports the human immune system."],
    [31, "Ga", "Gallium", "69.723", "post-trans", "Solid", 4, 13, "A soft metal that melts right in the palm of your hand (at 29.8°C / 85.6°F)."],
    [32, "Ge", "Germanium", "72.630", "metalloid", "Solid", 4, 14, "An early semiconductor material now used in fiber optics and infrared lenses."],
    [33, "As", "Arsenic", "74.922", "metalloid", "Solid", 4, 15, "Famously toxic, though used in trace amounts in specialized semiconductors."],
    [34, "Se", "Selenium", "78.971", "nonmetal", "Solid", 4, 16, "Conducts electricity better in light than in darkness; used in solar cells and glass."],
    [35, "Br", "Bromine", "79.904", "nonmetal", "Liquid", 4, 17, "One of only two elements that are liquid at room temperature, emitting a reddish vapor."],
    [36, "Kr", "Krypton", "83.798", "noble-gas", "Gas", 4, 18, "Used in high-speed photography flashes and energy-efficient window insulation."],
    [37, "Rb", "Rubidium", "85.468", "alkali", "Solid", 5, 1, "A highly reactive alkali metal used in atomic clocks and night-vision devices."],
    [38, "Sr", "Strontium", "87.62", "alkaline", "Solid", 5, 2, "Produces brilliant crimson-red flames in fireworks and emergency flares."],
    [39, "Y", "Yttrium", "88.906", "transition", "Solid", 5, 3, "Used in red phosphors for LED screens, camera lenses, and superconductors."],
    [40, "Zr", "Zirconium", "91.224", "transition", "Solid", 5, 4, "Highly resistant to heat and corrosion; used in nuclear reactors and ceramic knives."],
    [41, "Nb", "Niobium", "92.906", "transition", "Solid", 5, 5, "Used in superconducting magnets for MRI scanners and particle accelerators."],
    [42, "Mo", "Molybdenum", "95.95", "transition", "Solid", 5, 6, "Has a very high melting point and strengthens high-grade steel alloys."],
    [43, "Tc", "Technetium", "98", "transition", "Solid", 5, 7, "The lightest element with no stable isotopes; widely used in medical imaging."],
    [44, "Ru", "Ruthenium", "101.07", "transition", "Solid", 5, 8, "A rare platinum-group metal used to harden electrical contacts and chip resistors."],
    [45, "Rh", "Rhodium", "102.91", "transition", "Solid", 5, 9, "One of the rarest and most valuable metals, used in car catalytic converters."],
    [46, "Pd", "Palladium", "106.42", "transition", "Solid", 5, 10, "Absorbs up to 900 times its own volume in hydrogen gas; used in electronics."],
    [47, "Ag", "Silver", "107.87", "transition", "Solid", 5, 11, "Has the highest electrical and thermal conductivity of all metals."],
    [48, "Cd", "Cadmium", "112.41", "transition", "Solid", 5, 12, "Used in NiCd rechargeable batteries and bright yellow/red artists' pigments."],
    [49, "In", "Indium", "114.82", "post-trans", "Solid", 5, 13, "Essential for making transparent conductive coatings on smartphone touchscreens."],
    [50, "Sn", "Tin", "118.71", "post-trans", "Solid", 5, 14, "Used since ancient times to make bronze (with copper) and today in electronics solder."],
    [51, "Sb", "Antimony", "121.76", "metalloid", "Solid", 5, 15, "Used in flame-retardant materials and to harden lead in car batteries."],
    [52, "Te", "Tellurium", "127.60", "metalloid", "Solid", 5, 16, "Used in thin-film solar panels and rewritable CDs and DVDs."],
    [53, "I", "Iodine", "126.90", "nonmetal", "Solid", 5, 17, "An essential nutrient for thyroid health, added to iodized table salt."],
    [54, "Xe", "Xenon", "131.29", "noble-gas", "Gas", 5, 18, "Used in bright car headlights, cinema projectors, and spacecraft ion thrusters."],
    [55, "Cs", "Cesium", "132.91", "alkali", "Solid", 6, 1, "Defines the official length of one second in ultra-precise atomic clocks."],
    [56, "Ba", "Barium", "137.33", "alkaline", "Solid", 6, 2, "Creates bright green colors in fireworks and is used in medical X-ray imaging."],
    [57, "La", "Lanthanum", "138.91", "lanthanide", "Solid", 9, 4, "First of the lanthanides; used in hybrid car batteries and camera lenses."],
    [58, "Ce", "Cerium", "140.12", "lanthanide", "Solid", 9, 5, "The most abundant rare-earth element, used in lighter flints and glass polishing."],
    [59, "Pr", "Praseodymium", "140.91", "lanthanide", "Solid", 9, 6, "Used to create strong magnets and protective yellow goggles for welders."],
    [60, "Nd", "Neodymium", "144.24", "lanthanide", "Solid", 9, 7, "Creates the world's strongest permanent magnets used in headphones and wind turbines."],
    [61, "Pm", "Promethium", "145", "lanthanide", "Solid", 9, 8, "A rare radioactive lanthanide once used in luminous watch dials and space batteries."],
    [62, "Sm", "Samarium", "150.36", "lanthanide", "Solid", 9, 9, "Used in high-temperature magnets and precision-guided aircraft systems."],
    [63, "Eu", "Europium", "151.96", "lanthanide", "Solid", 9, 10, "Glows bright red under UV light; used in anti-counterfeiting euro banknotes."],
    [64, "Gd", "Gadolinium", "157.25", "lanthanide", "Solid", 9, 11, "Injected as a contrast agent to sharpen medical MRI scans."],
    [65, "Tb", "Terbium", "158.93", "lanthanide", "Solid", 9, 12, "Produces brilliant green light in fluorescent lamps and digital displays."],
    [66, "Dy", "Dysprosium", "162.50", "lanthanide", "Solid", 9, 13, "Helps neodymium magnets keep their magnetism at high temperatures."],
    [67, "Ho", "Holmium", "164.93", "lanthanide", "Solid", 9, 14, "Has the highest magnetic strength of any natural element; used in medical lasers."],
    [68, "Er", "Erbium", "167.26", "lanthanide", "Solid", 9, 15, "Amplifies signals in global fiber-optic internet cables and tints glass pink."],
    [69, "Tm", "Thulium", "168.93", "lanthanide", "Solid", 9, 16, "Used in portable X-ray machines and surgical lasers."],
    [70, "Yb", "Ytterbium", "173.05", "lanthanide", "Solid", 9, 17, "Used in high-power fiber lasers and experimental atomic clocks."],
    [71, "Lu", "Lutetium", "174.97", "lanthanide", "Solid", 9, 18, "The hardest and densest lanthanide, used in PET medical scanners."],
    [72, "Hf", "Hafnium", "178.49", "transition", "Solid", 6, 4, "Used in nuclear reactor control rods and advanced computer microprocessors."],
    [73, "Ta", "Tantalum", "180.95", "transition", "Solid", 6, 5, "Used to make tiny, high-capacity capacitors inside almost every smartphone."],
    [74, "W", "Tungsten", "183.84", "transition", "Solid", 6, 6, "Has the highest melting point of all pure metals (3,422°C); used in lightbulb filaments."],
    [75, "Re", "Rhenium", "186.21", "transition", "Solid", 6, 7, "Added to superalloys in jet engine turbine blades to withstand extreme heat."],
    [76, "Os", "Osmium", "190.23", "transition", "Solid", 6, 8, "The densest naturally occurring element on Earth—twice as dense as lead."],
    [77, "Ir", "Iridium", "192.22", "transition", "Solid", 6, 9, "Ultra-corrosion resistant; a thin layer in Earth's crust marks the dinosaur-killing asteroid."],
    [78, "Pt", "Platinum", "195.08", "transition", "Solid", 6, 10, "A precious, non-tarnishing metal used in jewelry, catalytic converters, and lab gear."],
    [79, "Au", "Gold", "196.97", "transition", "Solid", 6, 11, "A soft, corrosion-free precious metal prized for jewelry, currency, and microchips."],
    [80, "Hg", "Mercury", "200.59", "transition", "Liquid", 6, 12, "The only metal that is liquid at room temperature, historically used in thermometers."],
    [81, "Tl", "Thallium", "204.38", "post-trans", "Solid", 6, 13, "A soft, toxic metal once used in electronics and specialized optical glass."],
    [82, "Pb", "Lead", "207.2", "post-trans", "Solid", 6, 14, "A heavy, malleable metal used in car batteries and radiation shielding."],
    [83, "Bi", "Bismuth", "208.98", "post-trans", "Solid", 6, 15, "Forms rainbow-colored hopper crystals and is the active ingredient in Pepto-Bismol."],
    [84, "Po", "Polonium", "209", "post-trans", "Solid", 6, 16, "A rare, highly radioactive element discovered by Marie and Pierre Curie in 1898."],
    [85, "At", "Astatine", "210", "metalloid", "Solid", 6, 17, "The rarest naturally occurring element in Earth's crust; less than a gram exists at once."],
    [86, "Rn", "Radon", "222", "noble-gas", "Gas", 6, 18, "A colorless, radioactive noble gas produced naturally from the decay of uranium."],
    [87, "Fr", "Francium", "223", "alkali", "Solid", 7, 1, "An extremely radioactive and unstable alkali metal that decays within minutes."],
    [88, "Ra", "Radium", "226", "alkaline", "Solid", 7, 2, "Discovered by Marie Curie; glows faintly blue in the dark due to intense radioactivity."],
    [89, "Ac", "Actinium", "227", "actinide", "Solid", 10, 4, "First of the actinide series; glows pale blue in the dark from radioactivity."],
    [90, "Th", "Thorium", "232.04", "actinide", "Solid", 10, 5, "A weakly radioactive metal studied as a safer, abundant nuclear fuel."],
    [91, "Pa", "Protactinium", "231.04", "actinide", "Solid", 10, 6, "A rare, dense radioactive metal found in trace amounts in uranium ores."],
    [92, "U", "Uranium", "238.03", "actinide", "Solid", 10, 7, "The heaviest naturally abundant element, used as fuel in nuclear power plants."],
    [93, "Np", "Neptunium", "237", "actinide", "Solid", 10, 8, "The first synthetic transuranium element discovered, named after the planet Neptune."],
    [94, "Pu", "Plutonium", "244", "actinide", "Solid", 10, 9, "Used in nuclear reactors and as a heat source powering deep-space probes like Voyager."],
    [95, "Am", "Americium", "243", "actinide", "Solid", 10, 10, "Used in tiny, safe amounts inside standard household smoke detectors."],
    [96, "Cm", "Curium", "247", "actinide", "Solid", 10, 11, "Named after Marie and Pierre Curie; used in X-ray spectrometers on Mars rovers."],
    [97, "Bk", "Berkelium", "247", "actinide", "Solid", 10, 12, "A synthetic radioactive metal named after Berkeley, California."],
    [98, "Cf", "Californium", "251", "actinide", "Solid", 10, 13, "A strong neutron emitter used to start nuclear reactors and detect gold/silver ores."],
    [99, "Es", "Einsteinium", "252", "actinide", "Solid", 10, 14, "Named after Albert Einstein; first discovered in the debris of a 1952 hydrogen bomb test."],
    [100, "Fm", "Fermium", "257", "actinide", "Solid", 10, 15, "Named after physicist Enrico Fermi; produced only in microscopic quantities."],
    [101, "Md", "Mendelevium", "258", "actinide", "Solid", 10, 16, "Named after Dmitri Mendeleev, creator of the Periodic Table."],
    [102, "No", "Nobelium", "259", "actinide", "Solid", 10, 17, "Named after Alfred Nobel, inventor of dynamite and founder of the Nobel Prizes."],
    [103, "Lr", "Lawrencium", "266", "actinide", "Solid", 10, 18, "Final element of the actinide series, named after Ernest Lawrence."],
    [104, "Rf", "Rutherfordium", "267", "transition", "Solid", 7, 4, "A synthetic superheavy element named after nuclear physicist Ernest Rutherford."],
    [105, "Db", "Dubnium", "268", "transition", "Solid", 7, 5, "A synthetic element named after the Russian nuclear research town of Dubna."],
    [106, "Sg", "Seaborgium", "269", "transition", "Solid", 7, 6, "Named after Glenn T. Seaborg, who helped discover ten transuranium elements."],
    [107, "Bh", "Bohrium", "270", "transition", "Solid", 7, 7, "A synthetic radioactive element named after Danish physicist Niels Bohr."],
    [108, "Hs", "Hassium", "277", "transition", "Solid", 7, 8, "Named after the German state of Hesse, where it was first synthesized."],
    [109, "Mt", "Meitnerium", "278", "unknown", "Solid", 7, 9, "Named in honor of Lise Meitner, co-discoverer of nuclear fission."],
    [110, "Ds", "Darmstadtium", "281", "unknown", "Solid", 7, 10, "Created in 1994 in Darmstadt, Germany; exists for only fractions of a second."],
    [111, "Rg", "Roentgenium", "282", "unknown", "Solid", 7, 11, "Named after Wilhelm Röntgen, who discovered X-rays."],
    [112, "Cn", "Copernicium", "285", "unknown", "Gas", 7, 12, "Named after astronomer Nicolaus Copernicus; predicted to behave like a volatile gas."],
    [113, "Nh", "Nihonium", "286", "unknown", "Solid", 7, 13, "Named after 'Nihon' (Japan), the first element discovered in an Asian country."],
    [114, "Fl", "Flerovium", "289", "unknown", "Solid", 7, 14, "A superheavy synthetic element named after the Flerov Laboratory in Russia."],
    [115, "Mc", "Moscovium", "290", "unknown", "Solid", 7, 15, "A synthetic superheavy element named after the Moscow region."],
    [116, "Lv", "Livermorium", "293", "unknown", "Solid", 7, 16, "Named after Lawrence Livermore National Laboratory in California."],
    [117, "Ts", "Tennessine", "294", "unknown", "Solid", 7, 17, "The second-heaviest known element, named after the U.S. state of Tennessee."],
    [118, "Og", "Oganesson", "294", "unknown", "Solid", 7, 18, "The heaviest element on the Periodic Table, named after physicist Yuri Oganessian."]
];

// Grab HTML Elements
const tableContainer = document.getElementById("periodic-table");
const modal = document.getElementById("element-modal");
const closeBtn = document.getElementById("close-btn");

// Build all 118 Element Cards
function createTable() {
    elementsData.forEach(item => {
        // Unpack array values into readable variables
        const [number, symbol, name, mass, category, state, row, col, summary] = item;

        const card = document.createElement("div");
        card.classList.add("element", category);

        // Add top margin to Row 9 (Lanthanides) to separate them from the main table
        if (row === 9) {
            card.classList.add("lanthanide-gap");
        }

        // Place element in exact grid row & column
        card.style.gridRow = row;
        card.style.gridColumn = col;

        card.innerHTML = `
            <span class="number">${number}</span>
            <span class="symbol">${symbol}</span>
            <span class="name">${name}</span>
        `;

        // Open detail pop-up on click
        card.addEventListener("click", () => {
            openModal({ number, symbol, name, mass, category, state, summary });
        });

        tableContainer.appendChild(card);
    });
}

// Populate and show the Modal
function openModal(el) {
    document.getElementById("modal-number").textContent = `#${el.number}`;
    document.getElementById("modal-symbol").textContent = el.symbol;
    document.getElementById("modal-name").textContent = el.name;
    document.getElementById("modal-category").textContent = categoryNames[el.category];
    document.getElementById("modal-mass").textContent = `${el.mass} u`;
    document.getElementById("modal-state").textContent = el.state;
    document.getElementById("modal-summary").textContent = el.summary;

    const modalHeader = document.getElementById("modal-header");
    modalHeader.className = `modal-header ${el.category}`;

    modal.classList.remove("hidden");
}

// Close Modal Events
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
});

// Run on load
createTable();