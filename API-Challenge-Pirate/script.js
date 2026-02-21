const button = document.getElementById("translateBtn");
const catFactDisplay = document.getElementById("catFact");
const pirateDisplay = document.getElementById("pirateFact");
const errorDisplay = document.getElementById("errorMessage");

button.addEventListener("click", async () => {
  errorDisplay.textContent = "";
  catFactDisplay.textContent = "Loading...";
  pirateDisplay.textContent = "Translating...";

  try {
    // 1️⃣ Fetch Cat Fact
    const catResponse = await fetch("https://catfact.ninja/fact");
    const catData = await catResponse.json();
    const fact = catData.fact;

    catFactDisplay.textContent = fact;

    // 2️⃣ Send fact to Pirate Translation API
    const pirateResponse = await fetch(
      "https://api.funtranslations.com/translate/pirate.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `text=${encodeURIComponent(fact)}`
      }
    );

    const pirateData = await pirateResponse.json();

    if (pirateData.error) {
      throw new Error(pirateData.error.message);
    }

    pirateDisplay.textContent = pirateData.contents.translated;

  } catch (error) {
    errorDisplay.textContent = "Error: " + error.message;
    catFactDisplay.textContent = "";
    pirateDisplay.textContent = "";
  }
});