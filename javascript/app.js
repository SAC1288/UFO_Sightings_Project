// from data.js
const logvalue = (e) => {
  // alert.apply(e.target.value)
  console.log(e.target.value)
}

const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};



 // let date = d3.select("#datetime").property("value");
 // let city = d3.select("city").property("value");
 // let state = d3.select("state").property("value");
 // let country = d3.select("country").property("value");
 // let shape = d3.select("shape").property("value");
 // let filteredData = tableData;


// 3. Use this function to update the filters. 
function updateFilters() {

  tbody.html("");
  const dateFilter = document.getElementById('datetime').value;
  const cityFilter = document.getElementById('city').value;
  const stateFilter = document.getElementById('state').value;
  const countryFilter = document.getElementById('country').value;
  const shapeFilter = document.getElementById('shape').value;
  var conditions = []

  if (dateFilter) {
    conditions.push((dataRow) => {
      return dataRow.datetime === dateFilter
    })
  }

  if (cityFilter) {
    conditions.push((dataRow) => {
      return dataRow.city === cityFilter
    })
  }

  if (stateFilter) {
    conditions.push((dataRow) => {
      return dataRow.state === stateFilter
    })
  }

  if (countryFilter) {
    conditions.push((dataRow) => {
      return dataRow.country === countryFilter
    })
  }

  if (shapeFilter) {
    conditions.push((dataRow) => {
      return dataRow.shape === shapeFilter
    })
  }

  const filteredData = data.filter(dataRow => conditions.every(c => c(dataRow)))
  // const filteredData = data.filter(dataRow => {

  //   if (cityFilter) {

  //   }
  //   const filterParams = {
  //     city: cityFilter && cityFilter
  //   }
  //   return dataRow.city === cityFilter && dataRow.state === stateFilter
  // })

  // if citterFiltter = city.value

  // else if city &&& state

  // else if city &&& state &&& CountQueuingStrategy


  // else if city &&& satet &&& country &&& shape
  
  filteredData.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
  return filteredData
}
  //get all input fields data
  // do the filter


//   const filter = e.target.value
// let filteredData
// switch (filterType) {
//   case 'city':
//    filteredData =  data.filter(dataRow => 
//    dataRow.city === filter
//   ) 
//     break;
//   case 'state':
//    filteredData =  data.filter(dataRow => 
//    dataRow.state === filter
//   ) 
//     break;
  
//   default:
//     break;
// }


  
//   filteredData.forEach((dataRow) => {
//     // Append a row to the table body
//     let row = tbody.append("tr");

//     // Loop through each field in the dataRow and add
//     // each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       let cell = row.append("td");
//       cell.text(val);
//     });
//   });
//   return filteredData
 // let changedElement =  d3.select(this);

//  let elementValue = changedElement.property("value");
//  console.log(elementValue);

//  let filterId = changedElement.attr("id");
 // console.log(filterId);

 // if (elementValue) {
 //   filters[filterId] = elementValue;
 // }

 // else {
 //   delete filters[filterId];
 // }

  // filterTable(); 
//  }

  //if (filters)
    //filteredData = filteredData.filter(row => row.datetime === filters && row.city === filters && row.state === filters 
      //&& row.country === filters && row.shape === filters);
      //filterTable();


    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
  //  filterTable();
  
  
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    d3.selectAll("input").on("change", updateFilters);

    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);

const dateInput = document.getElementById('datetime');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('country');
const shapeInput = document.getElementById('shape');
// const log = document.getElementById('city')

// input.addEventListener('change', updateFilters )

dateInput.addEventListener('change', updateFilters);
cityInput.addEventListener('change', updateFilters);
stateInput.addEventListener('change', updateFilters);
countryInput.addEventListener('change', updateFilters);
shapeInput.addEventListener('change', updateFilters);
