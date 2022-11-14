document.addEventListener("DOMContentLoaded", () => {
  //#region OBSERVADOR DE IMAGENES TASK
  const imgOptions = {};
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      var dataImage = img.getAttribute("data-image");
      img.src = dataImage;
      imgObserver.unobserve(img);
    });
  }, imgOptions);
  //#endregion

  //#region CONSUMO DE API CON FETCH
  const fetchPokemons = async (endpoint) => {
    let data;
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      data = await response.json();
    } catch (error) {
      console.log(error);
    }

    return data.pokemon_species;
  };
  //#endregion

  //#region ORDENAR NUMEROS
  const orderNumber = (str) => {
    let mySubString = str.substring(
      str.lastIndexOf("s/") + 2,
      str.lastIndexOf("/")
    );

    return mySubString;
  };
  //#endregion

  //#region AGREGAR POKEMONS AL HTML
  const getPokemons = async (numberGen, toggle) => {
    let endpoint = `https://pokeapi.co/api/v2/generation/${numberGen}/`;

    var container = document.getElementById("container");
    container.innerHTML = "";

    let pokemons = [];

    pokemons = await fetchPokemons(endpoint);
    for (let j = 0; j < pokemons.length; j++) {
      pokemons[j].nr = orderNumber(pokemons[j].url);
    }
    pokemons.sort((a, b) => a.nr - b.nr);
    pokemons.forEach((pokemon) => {
      let numero3decimales = orderNumber(pokemon.url);
      if (numero3decimales < 10) {
        numero3decimales = "0" + numero3decimales;
      }
      if (numero3decimales < 100) {
        numero3decimales = "0" + numero3decimales;
      }

      let divitem = document.createElement("li");
      divitem.classList.add("item");
      var img = new Image();
      const toggleUrl = toggle
        ? "https://assets.pokemon.com/assets/cms/img/pokedex/full/"
        : "https://serebii.net/pokemongo/pokemon/";
      img.src = "./loadgif.gif";
      const urlImage = `${toggleUrl}${numero3decimales}.png`;
      img.setAttribute("data-image", urlImage);
      img.setAttribute("class", "pokeimage");
      img.setAttribute("alt", pokemon.name);

      divitem.innerHTML = `<div> ${pokemon.nr}-${pokemon.name}</div>`;
      divitem.appendChild(img);
      container.appendChild(divitem);
      imgObserver.observe(img);
    });
  };
  //#endregion

  //#region AGREGAR GENERACIONES
  var numero = 1;

  getPokemons(numero);
  var toggle = false;
  // btnIcono.addEventListener("click", function () {
  //   toggle = !toggle;
  //   getPokemons(numero, toggle);
  // });

  var geners = [
    "generation-1",
    "generation-2",
    "generation-3",
    "generation-4",
    "generation-5",
    "generation-6",
    "generation-7",
  ];

  var filters = document.getElementById("filters");
  var gen = "";
  for (let i = 0; i < geners.length; i++) {
    if (i === 0) {
      gen += `  <input class="radio-gens" type="radio" name="generation" id="${
        geners[i]
      }" value=${i + 1} checked>
                  <label for="${geners[i]}" class="label-gens">${
        geners[i]
      }</label>`;
    } else {
      gen += `  <input class="radio-gens" type="radio" name="generation" id="${
        geners[i]
      }" value=${i + 1}>
                  <label for="${geners[i]}" class="label-gens">${
        geners[i]
      }</label>`;
    }
  }
  filters.innerHTML = gen;

  filters.addEventListener("click", function (e) {
    let target = e.target.type;
    if (target === "radio") {
      getPokemons(e.target.value, toggle);
      title.innerHTML = "Pokemon " + e.target.id;
    }
  });
  //#endregion
});
