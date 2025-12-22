// ===== Zähler für neu erstellte Elemente =====
let counter = 0;

// ===== Funktion: Neues Element in <main> einfügen =====
function createNewElement() {
  let newElement = document.createElement("p");
  // Zähler erhöhen und Text setzen
  counter++;
  newElement.textContent = "Element " + counter;
  // <main>-Element auswählen und das neue <p> anhängen
  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}

// ===== Dynamischer JSON-Inhalt =====
function loadBrownieFact() {
  // Array mit Brownie-Fakten/Tipps
  const brownieFacts = [
    "Wusstest du? Brownies wurden 1893 in Chicago erfunden!",
    "Tipp: Lass die Brownies in der Form ganz abkühlen, damit sie nicht brechen.",
    "Variation: Eine Prise Meersalz oben drauf hebt den Schoko-Geschmack.",
    "Schoko-Fakt: Dunkle Schokolade (über 70%) ist am besten für Brownies.",
    "Back-Wissen: Eier sollten Zimmertemperatur haben für den besten Teig.",
  ];
  // Zufälligen Fakt auswählen
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
