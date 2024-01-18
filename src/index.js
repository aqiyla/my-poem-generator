function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7cc6e139312be6o1cb19t94fd0aeff4a";
  let context =
    "You are a rhythmic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. No <br /> after the last line of the poem. Make sure to follow the user instructions below. Do not include a title to the poem and do not write the font in different colors.";
  let prompt = `User instructions: Generate a Rap poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Rap poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
