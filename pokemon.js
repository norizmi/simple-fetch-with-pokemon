const pokemon = document.getElementById("pokemon");
const pokemonList = document.getElementById("get-pokemon");

const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=36";

async function hitApi() {
  const api = await fetch(endpoint);
  const { results } = await api.json();
  results.forEach((pokemon) => {
    getUrlInApi(pokemon);
  });
}

async function getUrlInApi(moreInfo) {
  const enpoint = await moreInfo.url;
  const apiUrl = await fetch(enpoint);
  const resultUrl = await apiUrl.json();

  //Image
  let image;
  image = resultUrl.sprites["front_default"];
  //id
  let id;
  id = resultUrl.id;
  //nama
  let name;
  name = resultUrl.name
  //type
  let type;
  type = resultUrl.types[0].type.name

  let item;
  item = document.createElement("div");
  item.innerHTML = `<figure>
  <figcaption style="margin-top: 30px">${id}: ${name}</figcaption>
  <img src="${image}" alt=${name} style="display: block; margin: 0 -30px;" width="300" height="300">
  <figcaption>type: ${type}</figcaption>
</figure>`;

  item.classList.add("item")
  item.setAttribute("style", `background-color: ${checkTypeColor(type)}`)
  pokemonList.appendChild(item);

}

function checkTypeColor(type) {
    let color;
    switch (type) {
      case "grass":
        color = "#8DD694";
        break;
        case "water":
        color = "#8DC6E6";
        break;
        case "fire":
        color = "#E69D8D";
        break;
        case "bug":
        color = "#BDDD7A";
        break;
        case "normal":
        color = "#B1B1B1";
        break;
        case "flying":
        color = "#C9ADEC";
        break;
        case "rock":
        color = "#B99D72";
        break;
        case "ground":
        color = "#EFBE85";
        break;
        case "psychic":
        color = "#D053BC";
        break;
        case "ghost":
        color = "#835E94";
        break;
        case "dark":
        color = "#686868";
        break;
        case "steel":
        color = "#598BFA3"
        break;
        case "poison":
        color = "#A55DB1";
        break;
        case "electric":
        color = "#E7C859";
        break;
        case "fairy":
        color = "#EEA1E2";
        break;
        case "fighting":
        color = "#E07F60";
        break;
        case "dragon":
        color = "#8859D5";
        break;
        case "ice":
        color = "#71D8DE";
        break;
    }

    return color
}

document.getElementById("pokemon").onclick = hitApi;
