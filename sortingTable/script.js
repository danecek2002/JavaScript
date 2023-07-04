// Funkce pro přidání tlačítek
function addButtons() {
  let thead = document.querySelector("thead");
  let theadRows = thead.querySelectorAll("td");

  for (let i = 0; i < theadRows.length; i++) {
    let row = theadRows[i];
    let button = document.createElement("button");
    button.textContent = "S";
    row.appendChild(button);
  }
}

// Funkce pro získání dat z tabulky
function getTableData() {
  let tds = document.querySelectorAll("tbody td");
  let nicks = [];
  let aura = [];
  let comments = [];
  let articles = [];
  let games = [];

  for (let i = 0; i < tds.length; i++) {
    let td = tds[i];
    let column = td.cellIndex;
    let value = td.textContent.trim();

    if (column === 0) {
      nicks.push(value);
    } else if (column === 1) {
      aura.push(value);
    } else if (column === 2) {
      comments.push(value);
    } else if (column === 3) {
      articles.push(value);
    } else if (column === 4) {
      games.push(value);
    }
  }

  return { nicks, aura, comments, articles, games };
}

// Funkce pro seřazení číselného sloupce
function sortColumn(columnIndex, data) {
  var columnData = data.slice(); // Vytvoříme kopii dat pro seřazení

  columnData.sort(function (a, b) {
    return a - b;
  });

  // Aktualizace hodnot v tabulce
  var tdElements = document.querySelectorAll(
    `tbody td:nth-child(${columnIndex})`
  );
  tdElements.forEach(function (td, index) {
    td.textContent = columnData[index];
  });
}

// Funkce pro seřazení textového sloupce
function sortTextColumn(columnIndex, data) {
  var columnData = data.slice(); // Vytvoříme kopii dat pro seřazení
  columnData.sort(function (a, b) {
    return a.localeCompare(b, "cs", { sensitivity: "base" });
  });

  // Aktualizace hodnot v tabulce
  var tdElements = document.querySelectorAll(
    `tbody td:nth-child(${columnIndex})`
  );
  tdElements.forEach(function (td, index) {
    td.textContent = columnData[index];
  });
}

// Funkce volaná po načtení stránky
window.onload = function () {
  addButtons();

  // Získání dat z tabulky
  let { nicks, aura, comments, articles, games } = getTableData();

  // Přiřazení akcí pro tlačítka
  let buttons = document.getElementsByTagName("button");
  buttons[0].addEventListener("click", function () {
    sortTextColumn(1, nicks);
  });
  buttons[1].addEventListener("click", function () {
    sortColumn(2, aura);
  });
  buttons[2].addEventListener("click", function () {
    sortColumn(3, comments);
  });
  buttons[3].addEventListener("click", function () {
    sortColumn(4, articles);
  });
  buttons[4].addEventListener("click", function () {
    sortColumn(5, games);
  });
};