let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");
  counter++;
  newElement.textContent = "Element " + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}

// ===== Dynamischer JSON-Inhalt =====
function loadBrownieFact() {
  const brownieFacts = [
    "Wusstest du? Brownies wurden 1893 in Chicago erfunden!",
    "Tipp: Lass die Brownies in der Form ganz abkühlen, damit sie nicht brechen.",
    "Variation: Eine Prise Meersalz oben drauf hebt den Schoko-Geschmack.",
    "Schoko-Fakt: Dunkle Schokolade (über 70%) ist am besten für Brownies.",
    "Back-Wissen: Eier sollten Zimmertemperatur haben für den besten Teig.",
  ];

  const randomFact =
    brownieFacts[Math.floor(Math.random() * brownieFacts.length)];

  const container = document.getElementById("dynamic-content");

  // ✅ return ist hier erlaubt
  if (!container) return;

  container.innerHTML = `
    <p style="font-style: italic; font-weight: bold; margin-bottom: 10px;">
      "${randomFact}"
    </p>
  `;

  const btnReload = document.createElement("button");
  btnReload.innerText = "Nächster Tipp";
  btnReload.onclick = () => location.reload();

  const btnRemove = document.createElement("button");
  btnRemove.innerText = "Tipp ausblenden";
  btnRemove.style.marginLeft = "10px";
  btnRemove.onclick = () => container.remove();

  container.appendChild(btnReload);
  container.appendChild(btnRemove);
}

// 🔥 Funktion ausführen
loadBrownieFact();
