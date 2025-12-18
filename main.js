let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");

  counter = counter + 1;

  newElement.textContent = "Element" + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}
  // JSON-Ersatz //
    const brownieFacts = [
        "Wusstest du? Brownies wurden 1893 in Chicago erfunden!",
        "Tipp: Lass die Brownies in der Form ganz abkühlen, damit sie nicht brechen.",
        "Variation: Eine Prise Meersalz oben drauf hebt den Schoko-Geschmack.",
        "Schoko-Fakt: Dunkle Schokolade (über 70%) ist am besten für Brownies.",
        "Back-Wissen: Eier sollten Zimmertemperatur haben für den besten Teig."
    ];

    // Zufälligen Fakt auswählen
    const randomFact = brownieFacts[Math.floor(Math.random() * brownieFacts.length)];

    // Element suchen (Das muss in deiner HTML <div id="dynamic-content"></div> sein)
    const container = document.getElementById("dynamic-content");

    // Falls das Element nicht existiert (Sicherheitscheck), brechen wir ab
    if (!container) return;

    // 1. Den Text einfügen
    // Wir nutzen innerHTML, um Struktur zu bauen
    container.innerHTML = `
        <p style="font-style: italic; font-weight: bold; margin-bottom: 10px;">
            "${randomFact}"
        </p>
    `;

    // 2. Button "Nächster Tipp" (Deine Reload-Lösung)
    const btnReload = document.createElement("button");
    btnReload.innerText = "Nächster Tipp";
    btnReload.style.padding = "8px 12px";
    btnReload.style.cursor = "pointer";
    btnReload.style.marginRight = "10px"; // Abstand

    btnReload.onclick = function() {
        // Seite neu laden (Deine gewünschte Methode)
        location.reload();
    };

    // 3. Button "Weg damit" (Erfüllt die Anforderung "dynamisch entfernt werden")
    const btnRemove = document.createElement("button");
    btnRemove.innerText = "Tipp ausblenden";
    btnRemove.style.padding = "8px 12px";
    btnRemove.style.cursor = "pointer";
    btnRemove.style.backgroundColor = "#ffcccc"; // Hellrot als Warnung

    btnRemove.onclick = function() {
        // Entfernt den ganzen Container aus dem HTML
        container.remove();
    };

    // Die Buttons in den Container packen
    container.appendChild(btnReload);
    container.appendChild(btnRemove);
;
