// =========================
// 📌 ANIMAL DATA (objects)
// =========================
const animals = [
    {
        name: "Tiger",
        type: "mammal",
        image: "tiger.jpg",
        info: "Tigers are the largest cat species on Earth. Known for their strength and striking orange coats with black stripes.",
        habitat: "Forests, grasslands, and wetlands.",
        diet: "Carnivore – mainly deer and large mammals.",
        lifespan: "10–15 years",
        funfact: "No two tigers have the same stripe pattern!"
    },

    {
        name: "Monkey",
        type: "mammal",
        image: "monkey.jpg",
        info: "Monkeys are intelligent primates known for agility, curiosity, and complex social behavior.",
        habitat: "Tropical rainforests and mountainous regions.",
        diet: "Omnivore – fruits, leaves, insects.",
        lifespan: "15–30 years",
        funfact: "Some monkeys can understand basic arithmetic!"
    },

    {
        name: "Zebra",
        type: "mammal",
        image: "zebra.jpg",
        info: "Zebras are known for their unique black-and-white stripes, which act as natural camouflage.",
        habitat: "Savannas and open grasslands.",
        diet: "Herbivore – mainly grasses.",
        lifespan: "20–25 years",
        funfact: "A group of zebras is called a 'dazzle'."
    },

    {
        name: "Penguin",
        type: "bird",
        image: "penguin.jpg",
        info: "Penguins are flightless birds adapted to life in the water. Excellent swimmers with streamlined bodies.",
        habitat: "Coastal Antarctica and sub-Antarctic islands.",
        diet: "Carnivore – fish, squid, krill.",
        lifespan: "15–20 years",
        funfact: "Penguins propose with pebbles!"
    },

    {
        name: "Giraffe",
        type: "mammal",
        image: "giraffe.jpg",
        info: "Giraffes are the tallest land animals on Earth with long necks used to reach high tree leaves.",
        habitat: "African savannas and woodlands.",
        diet: "Herbivore – mainly acacia leaves.",
        lifespan: "25–30 years",
        funfact: "A giraffe’s heart weighs around 11 kilograms!"
    }
];


// =========================
// 📌 RENDER ANIMALS
// =========================
function renderAnimals(list) {
    const container = document.getElementById("animalContainer");
    container.innerHTML = "";

    list.forEach(animal => {
        const card = document.createElement("div");
        card.className = "animal-card";
        card.innerHTML = `
            <img src="${animal.image}">
            <h3>${animal.name}</h3>
        `;
        card.onclick = () => openPopup(animal);
        container.appendChild(card);
    });
}

renderAnimals(animals);


// =========================
// 📌 SEARCH FUNCTION
// =========================
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const result = animals.filter(a => a.name.toLowerCase().includes(value));
    renderAnimals(result);
});


// =========================
// 📌 FILTER FUNCTION
// =========================
document.getElementById("filterSelect").addEventListener("change", function () {
    const type = this.value;
    if (type === "all") renderAnimals(animals);
    else renderAnimals(animals.filter(a => a.type === type));
});


// =========================
// 📌 SORT FUNCTION
// =========================
document.getElementById("sortSelect").addEventListener("change", function () {
    const choice = this.value;
    let sorted = [...animals];

    if (choice === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (choice === "lifespan") sorted.sort((a, b) => a.lifespan.localeCompare(b.lifespan));

    renderAnimals(sorted);
});


// =========================
// 📌 POPUP LOGIC
// =========================
function openPopup(animal) {
    document.getElementById("popupImage").src = animal.image;
    document.getElementById("popupName").textContent = animal.name;
    document.getElementById("popupInfo").textContent = animal.info;
    document.getElementById("popupHabitat").textContent = "🌍 Habitat: " + animal.habitat;
    document.getElementById("popupDiet").textContent = "🍽️ Diet: " + animal.diet;
    document.getElementById("popupLifespan").textContent = "⏳ Lifespan: " + animal.lifespan;
    document.getElementById("popupFunFact").textContent = "⭐ Fun Fact: " + animal.funfact;

    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("popupOverlay").classList.remove("hidden");
}

document.getElementById("closePopup").onclick = closePopup;
document.getElementById("popupOverlay").onclick = closePopup;

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("popupOverlay").classList.add("hidden");
}
