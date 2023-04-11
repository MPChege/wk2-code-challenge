const animalList = document.getElementById("animal-list");
const animalDetails = document.getElementById("animal-details");

// Fetch all animals from API
fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((animals) => {
    // Display all animals' names
    animals.forEach((animal) => {
      const li = document.createElement("li");
      li.textContent = animal.name;
      li.addEventListener("click", () => showDetails(animal));
      animalList.appendChild(li);
    });
  });

// Show details of a selected animal
function showDetails(animal) {
  // Fetch animal details from API
  fetch(`http://localhost:3000/characters/${animal.id}`)
    .then((response) => response.json())
    .then((animalDetailsData) => {
      // Display animal's details
      animalDetails.innerHTML = `
        <h2>${animalDetailsData.name}</h2>
        <img src="${animalDetailsData.image}" alt="${animalDetailsData.name}" />
        <p>Votes: ${animalDetailsData.votes}</p>
        <button id="add-vote-button">Add Vote</button>
      `;
      const addVoteButton = document.getElementById("add-vote-button");
      addVoteButton.addEventListener("click", () => {
        // Update number of votes for the animal
        animalDetailsData.votes += 1;
        animalDetails.innerHTML = `
          <h2>${animalDetailsData.name}</h2>
          <img src="${animalDetailsData.image}" alt="${animalDetailsData.name}" />
          <p>Votes: ${animalDetailsData.votes}</p>
          <button id="add-vote-button">Add Vote</button>
        `;
      });
    });
}
