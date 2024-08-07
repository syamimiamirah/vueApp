<template>
  <div>
    <button @click="exportToCSV">Export to CSV</button>
    <table class="center">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="key in Object.keys(item)" :key="key">{{ item[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { exportToCSV } from "../utils/csvUtils";

export default {
  name: "TableComponent",
  data() {
    return {
      headers: ["Assets Name", "Department"],  // Updated headers to match data keys
      data: [
        { assets_name: "Printer", department: "HR" },  // Ensure keys match headers
        { assets_name: "Monitor", department: "IT" },
        { assets_name: "Barcode Scanner", department: "ACCOUNT" },
      ],
    };
  },
  methods: {
    exportToCSV() {
      exportToCSV(this.data, this.headers, "data.csv");
    },
  },
};
</script>

<style>
button {
  position: absolute;
  top: 50%;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  cursor: pointer;
}

table {
  width: 75%;
  border-collapse: collapse;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
tr:nth-child(even){background-color: #f2f2f2;}

 tr:hover {background-color: #ddd;}

 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #778899;
  color: white;
}
</style>
