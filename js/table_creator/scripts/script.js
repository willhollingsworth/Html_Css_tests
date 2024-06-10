
function getRandomIntSingle(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function getRandomIntMultiple(length){
    let out = ''
    for (i of Array(length)){
        out += getRandomIntSingle(0,9);
    }
    return out
}
function getRandomCharSingle() {
    return codeToChar(getRandomIntSingle(97,122));
}
function getRandomCharMultiple(length) {
    let out = ''
    for (i of Array(length)){
        out += getRandomCharSingle();
    }  
    return out
}
function charToCode(char) {
    return char.charCodeAt(0);
}
function codeToChar(code) {
    return String.fromCharCode(code);
}
function buildSampleData(length){
    out = [];
    for (i of new Array(length)){
        let entry = [];
        entry.push(getRandomCharMultiple(6));
        entry.push(getRandomCharMultiple(2));
        entry.push(getRandomIntMultiple(4));
        entry.push(getRandomIntMultiple(10));
        entry.push(getRandomIntMultiple(6));
        out.push(entry);
    }  
    return out
}

function buildTable(data){
    // example code from  https://www.delftstack.com/howto/javascript/create-table-javascript/

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'User id';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Name';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Company';

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = '001';
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = 'James Clerk';
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = 'Netflix';

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);

    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.body.appendChild(table);
}


// console.log(buildSampleData(5));
buildTable(buildSampleData(5));

// https://www.valentinog.com/blog/html-table/
// more example code
  
//   function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//       let th = document.createElement("th");
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }
  
//   function generateTable(table, data) {
//     for (let element of data) {
//       let row = table.insertRow();
//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
  
//   let table = document.("table");
//   let data = Object.keys(mountains[0]);
//   generateTableHead(table, data);
//   generateTable(table, mountains);