
function getRandomIntSingle(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function getRandomIntMultiple(length){
    let out = ''
    for (i of new Array(length)){
        out += getRandomIntSingle(0,9);
    }
    return out
}
function getRandomCharSingle() {
    return codeToChar(getRandomIntSingle(97,122));
}
function getRandomCharMultiple(length) {
    let out = ''
    for (i of new Array(length)){
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
        entry.push(getRandomCharMultiple(10));
        entry.push(getRandomIntMultiple(4));
        entry.push(getRandomIntMultiple(14));
        out.push(entry);
    }  
    return out
}


console.log(buildSampleData(5));
