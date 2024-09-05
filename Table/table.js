// Sample table data
const tableData = [
  { name: "John Doe", age: 25, country: "USA" },
  { name: "Jane Smith", age: 30, country: "UK" },
  { name: "Jack Johnson", age: 35, country: "Canada" },
  { name: "Lisa Wong", age: 28, country: "Australia" },
  { name: "Anna Davis", age: 22, country: "USA" },
  { name: "Chris Lee", age: 29, country: "South Korea" },
  { name: "Mohammed Ali", age: 33, country: "UAE" },
  { name: "Juan Carlos", age: 27, country: "Mexico" },
  // Add more data as needed
];

let currentPage = 1;
const rowsPerPage = 4; // Rows per page

// Load table with pagination
function loadTable(page) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = tableData.slice(start, end);

  paginatedData.forEach(row => {
      const newRow = `<tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.country}</td>
      </tr>`;
      tableBody.innerHTML += newRow;
  });

  // Update page info
  document.getElementById("pageInfo").textContent = `Page ${page} of ${Math.ceil(tableData.length / rowsPerPage)}`;
}

// Sorting functionality
let sortDirection = true;
function sortTable(columnIndex) {
  sortDirection = !sortDirection;
  tableData.sort((a, b) => {
      const key = Object.keys(a)[columnIndex];
      const valA = a[key].toString().toLowerCase();
      const valB = b[key].toString().toLowerCase();
      if (valA < valB) return sortDirection ? -1 : 1;
      if (valA > valB) return sortDirection ? 1 : -1;
      return 0;
  });
  loadTable(currentPage);
}

// Filtering functionality
function filterColumn(columnIndex) {
  const filterInput = event.target.value.toLowerCase();
  const key = Object.keys(tableData[0])[columnIndex];

  const filteredData = tableData.filter(row => row[key].toString().toLowerCase().includes(filterInput));
  loadFilteredTable(filteredData);
}

function loadFilteredTable(filteredData) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  filteredData.forEach(row => {
      const newRow = `<tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.country}</td>
      </tr>`;
      tableBody.innerHTML += newRow;
  });
}

// Export table functionality
function exportTable(format) {
  const data = tableData.map(row => Object.values(row));

  if (format === "csv") {
      exportToCSV(data);
  } else if (format === "json") {
      exportToJSON(tableData);
  } else if (format === "txt") {
      exportToText(data);
  }
}

function exportToCSV(data) {
  const csvContent = data.map(row => row.join(",")).join("\n");
  downloadFile(csvContent, "table_data.csv", "text/csv");
}

function exportToJSON(data) {
  const jsonContent = JSON.stringify(data, null, 2);
  downloadFile(jsonContent, "table_data.json", "application/json");
}

function exportToText(data) {
  const textContent = data.map(row => row.join("\t")).join("\n");
  downloadFile(textContent, "table_data.txt", "text/plain");
}

function downloadFile(content, fileName, mimeType) {
  const a = document.createElement("a");
  const blob = new Blob([content], { type: mimeType });
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}

// Pagination controls
function prevPage() {
  if (currentPage > 1) {
      currentPage--;
      loadTable(currentPage);
  }
}

function nextPage() {
  if (currentPage * rowsPerPage < tableData.length) {
      currentPage++;
      loadTable(currentPage);
  }
}

// Load initial table data
loadTable(currentPage);
