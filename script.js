const animals = {
    lion: {
        name: "Lion",
        image: "lion.jpg",
        desc: "Known as the king of the jungle. Lions live in prides and are powerful predators."
    },
    elephant: {
        name: "Elephant",
        image: "elephant.jpg",
        desc: "The largest land animal. Gentle giants with amazing memory."
    },
    giraffe: {
        name: "Giraffe",
        image: "giraffe.jpg",
        desc: "Tallest animal on Earth. Known for long necks and calm nature."
    },
    penguin: {
        name: "Penguin",
        image: "penguin.jpg",
        desc: "A flightless bird that swims excellently and lives in cold climates."
    },
    zebra: {
        name: "Zebra",
        image: "zebra.jpg",
        desc: "Famous for their unique black and white stripes. Each pattern is different."
    }
};

/* DISPLAY ANIMALS ON HOMEPAGE */
window.onload = function () {
    if (document.getElementById("animalList")) {
        loadAnimals();
    }

    if (window.location.search.includes("animal")) {
        loadAnimalDetails();
    }
};

/* LOAD ANIMALS */
function loadAnimals() {
    const container = document.getElementById("animalList");
    container.innerHTML = "";

    for (let key in animals) {
        container.innerHTML += `
            <div class="animal-card fade-in" onclick="viewAnimal('${key}')">
                <img src="${animals[key].image}">
                <h3>${animals[key].name}</h3>
            </div>
        `;
    }
}

/* SEARCH FUNCTION */
function searchAnimals() {
    const text = document.getElementById("searchBar").value.toLowerCase();
    const container = document.getElementById("animalList");

    container.innerHTML = "";

    for (let key in animals) {
        if (animals[key].name.toLowerCase().includes(text)) {
            container.innerHTML += `
                <div class="animal-card fade-in" onclick="viewAnimal('${key}')">
                    <img src="${animals[key].image}">
                    <h3>${animals[key].name}</h3>
                </div>
            `;
        }
    }
}

/* GO TO ANIMAL PAGE */
function viewAnimal(name) {
    window.location.href = "animal.html?animal=" + name;
}

/* LOAD DETAILS PAGE */
function loadAnimalDetails() {
    const query = new URLSearchParams(window.location.search);
    const animal = query.get("animal");

    if (animals[animal]) {
        document.getElementById("animalName").innerText = animals[animal].name;
        document.getElementById("animalInfo").innerHTML = `
            <img src="${animals[animal].image}">
            <p>${animals[animal].desc}</p>
        `;
    }
}

/* DARK / LIGHT MODE */
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("modeToggle");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}
