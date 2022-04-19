//You can start simple and just render a single
//pokemon card from the first element

{
  /* <li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li>; */
}

// found that the information needed is in the data.js
// loop through data array of pokemon data
const cardlistUL = document.getElementById("card-list");
for (let i = 0; i < data.length; i++) {
  console.log("Pokemon at i", data[i]);
  const pokemon = data[i]; // js object of current pokemon

  // add li to ul
  const cardLI = document.createElement("li");
  cardLI.setAttribute("class", "card");
  cardlistUL.append(cardLI); // add at end of list

  // create an h2
  const cardH2 = document.createElement("h2");
  // set the text to pokemon name
  cardH2.innerHTML = pokemon.name;
  // add h2 to li
  cardLI.append(cardH2);

  const cardImg = document.createElement("Img");
  cardImg.setAttribute("class", "card--img");
  cardImg.width = "256";
  cardImg.src = pokemon.sprites.other["official-artwork"].front_default;
  cardLI.append(cardImg);

  const cardUl = document.createElement("ul");

  cardUl.setAttribute("class", "card--text");
  cardLI.append(cardUl);

  for (let j = 0; j < pokemon.stats.length; j++) {
    //create
    const statLi = document.createElement("li");
    //set
    statLi.innerHTML =
      pokemon.stats[j].stat.name + ": " + pokemon.stats[j].base_stat;
    //add

    cardUl.append(statLi);
  }
}
