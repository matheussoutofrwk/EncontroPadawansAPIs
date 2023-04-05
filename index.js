getPokemon();
function getPokemon() {
  fetch(
    "https://pokeapi.co/api/v2/pokemon",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      appendData(data.results);
      console.log("Success:", data.results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function appendData(pokemons) {
    let placeholder = document.querySelector("#data-output");
    let out = "";

    for(let pokemon of pokemons) {
        out += `
        <tr>
           <td>${pokemon.name}</td>
           <td>${pokemon.url}</td>
        </tr>
     `;
    }

    placeholder.innerHTML = out;
}

function sendMessage() {
    const message = document.getElementById("textoDigitado").value;
    const bodyMessage = {
        chat_id: 2026422731,
        text: message,
        parse_mode: "HTML",
      };
    fetch(
      "https://api.telegram.org/bot6079767831:AAFPvnQNOuujMJZHwYHWiOuQrSrINnS04R0/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyMessage),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  