console.log("main.js loaded ✅");

function getNumberFact() {
  console.log("Button clicked ✅");

  const url = "http://numbersapi.com/random/trivia";

  // Try direct first (works for some people depending on CORS/network)
  fetch(url)
    .then((r) => r.text())
    .then((fact) => {
      document.getElementById("factDisplay").textContent = fact;
    })
    .catch(() => {
      // If direct fails, use AllOrigins /get endpoint (more reliable than /raw)
      const allOrigins = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

      fetch(allOrigins)
        .then((r) => r.json())
        .then((data) => {
          document.getElementById("factDisplay").textContent = data.contents;
        })
        .catch(() => {
          // Last resort backup proxy
          const backup = "https://corsproxy.io/?" + encodeURIComponent(url);

          fetch(backup)
            .then((r) => r.text())
            .then((fact) => {
              document.getElementById("factDisplay").textContent = fact;
            })
            .catch((error) => {
              console.log("Fetch error:", error);
              document.getElementById("factDisplay").textContent =
                "Error fetching fact. (Proxy is down)";
            });
        });
    });
}