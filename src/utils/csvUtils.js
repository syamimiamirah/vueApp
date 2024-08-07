// src/utils/csvUtils.js

export function exportToCSV(data, headers, filename) {
    const csvRows = [];
    const headerRow = headers.join(',');
    csvRows.push(headerRow);
  
    data.forEach(row => {
      const values = headers.map(header => {
        // Match header with the appropriate key in the data
        const key = header.toLowerCase().replace(' ', '_');
        const escaped = ('' + row[key]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    });
  
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  