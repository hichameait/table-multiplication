

  fetch("num.json")
    .then((response) => response.json())
    .then((data) => {
      const rows = data.numbers;
      const columns = data.numbers;
      createTable(rows, columns);
      
    })
  function createTable(rows, columns) {
    const table = document.getElementById("table");

    let selectedRow = null;
    let selectedColumn = null;

    let headerRow = document.createElement("tr");
    let emptyHeader = document.createElement("th");
    headerRow.appendChild(emptyHeader);

    columns.forEach((col) => {
      let header = document.createElement("th");
      header.textContent = col;
      header.addEventListener("click", () => selectColumn(col));
      headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    rows.forEach((row) => {
      let tableRow = document.createElement("tr");
      let rowHeader = document.createElement("th");
      rowHeader.textContent = row;
      rowHeader.addEventListener("click", () => selectRow(row));
      tableRow.appendChild(rowHeader);

      columns.forEach((col) => {
        let cell = document.createElement("td");
        tableRow.appendChild(cell);
      });
      table.appendChild(tableRow);
    });

    function selectRow(row) {
      selectedRow = row;
      checkResult();
    }

    function selectColumn(col) {
      selectedColumn = col;
      checkResult();
    }


    function cls() {
      for (let i = 1; i < table.rows.length; i++) {
  
        for (let j = 1; j < table.rows[i].cells.length; j++) {
          table.rows[i].cells[j]
          table.rows[i].cells[j].textContent = "";
        }
      }}


    function checkResult() {
      if (selectedRow !== null && selectedColumn !== null) {
        cls();
        const result = selectedRow * selectedColumn;
        const cell = table.rows[selectedRow].cells[selectedColumn];
        cell.textContent = result;
        selectedRow = null;
        selectedColumn = null;
      }
    }

    
  }

