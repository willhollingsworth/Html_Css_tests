
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
function getRandomBoolean() {
    return getRandomIntSingle(0, 1) == true
}

function charToCode(char) {
    return char.charCodeAt(0);
}
function codeToChar(code) {
    return String.fromCharCode(code);
}

function buildSampleData(rows = 3, columns = 3){
    let out = [], columns_settings = [];

    //loop over each row
    for (i of new Array(rows).keys()){
        let entry = [];
        // loop over each column
        for (j of new Array(columns).keys()){
            let length, type;
            // if column settings are not set up then assign a type and length
            if (!columns_settings[j]){
                length = getRandomIntSingle(3,10);
                type = getRandomBoolean();
                columns_settings.push([length, type]);
            } else {
                // if column settings are setup then use previous settings
                [length, type] = columns_settings[j];
            }
            if (type){
                // push random characters to list
                entry.push(getRandomCharMultiple(length));
            } else {
                // push random numbers to list
                entry.push(getRandomIntMultiple(length));
            }
        }
        // write the entire row the the output var
        out.push(entry);
    }  
    return out
}

function buildRowSingle(data, type){
    let tableRow = document.createElement('tr');
    for (i of data){
        let entry = document.createElement(type);
        entry.innerHTML = i;
        tableRow.appendChild(entry);
    }
    return tableRow;
}
function buildRowMultiple(data, type){
    let tableBodyElement = document.createElement('tbody');
    for (i of data){
        let row = buildRowSingle(i, 'td');
        tableBodyElement.appendChild(row);
    }
    return tableBodyElement;
}


function buildTable(data){
    /* build a html table */

    // create a main table element
    let tableMainElement = document.createElement('table');

    //create the headers
    let headersData = ['user id','name','company']
    let tableHeaderElement = document.createElement('thead');
    let headersRow = buildRowSingle(headersData,'th');
    tableHeaderElement.appendChild(headersRow);
    tableMainElement.appendChild(tableHeaderElement);

    //create the other rows
    sampleData =[
        ["a", "b", "c"],
        ["d", "e", "f"],
    ]
    let tableBodyElement = buildRowMultiple(sampleData)
    tableMainElement.appendChild(tableBodyElement);

    // // Adding the table to the main html body element
    document.body.appendChild(tableMainElement);
}
buildTable();
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