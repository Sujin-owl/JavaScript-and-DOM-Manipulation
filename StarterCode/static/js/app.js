// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

//loop through 'data' and append the data to the corresponding row
tableData.map(data => {
    var row = tbody.append("tr");
    Object.entries(data).map(([key,value]) => {
        row.append("td").text(value);
    });
});
// getting a reference to the button on the page with the id 'filter-btn'
var button = d3.select("#filter-btn");
// getting a reference to the input element on the page with the id 'datetime'
// this function is triggered when the button is clicked
button.on("click",function() {
    // prevent the page form refreshing
    d3.event.preventDefault();
    // select the input element and get the value of the input
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);
    console.log(tableData);
    // filter the table data with input date
    var filteredData = tableData.filter(data => data.datetime === inputDate);
    console.log(filteredData);
    // getting a reference to output field
    var output = d3.select("tbody");
    // remove existing content from table
    output.selectAll("tr").remove();
    // add the filtered data to the 'tr'
    filteredData.map (filteredData =>{
        var row = output.append("tr");
        Object.entries(filteredData).map(([key,value]) => {
            row.append("td").text(value);
        });
    });
});
