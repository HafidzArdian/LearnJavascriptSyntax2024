// fetch = function used for making HTTP requests to fetch resources.
//          (JSON style data, image, files)

//          Simplifies async data fetching in javascript and
//          used for interacting with APIs to retrieve and send
//          data asynchronously over the web.

//          fetch(url, {options})

// getPokemon();
// async function getPokemon() {
//   try {
//     const pokemonName = document
//       .getElementById("pokemonName")
//       .value.toLocaleLowerCase();

//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );
//     if (!response.ok) {
//       throw new Error("Pokemon not found");
//     }
//     const data = await response.json();
//     const pokemonSprite = data.sprites.front_default;
//     const imgElement = document.getElementById("pokemonSprite");
//     imgElement.src = pokemonSprite;
//     imgElement.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }

document.getElementById("btn").addEventListener("click", getPokemon);

async function getPokemon() {
  try {
    const pokemonInput = document.getElementById("pokemonName");
    if (!pokemonInput) {
      console.error("Element with ID 'pokemonName' not found.");
      return;
    }
    
    const pokemonName = pokemonInput.value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites?.front_default; // menggunakan optional chaining
 
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
