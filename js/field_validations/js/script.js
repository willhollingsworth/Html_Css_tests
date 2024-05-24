function validate(){
    // grab all items that are an input
    const INPUTS = document.querySelectorAll('input');
    let checks = {};
    let checkKeys = [];
    let checkValues = [];
    let fail_index = 0;

    for(let field of INPUTS){
        // create an object that contains the check's name and it's check conditions
        checks = {
            'too small' : field.value.length > 0,
            'too large' : field.value.length < 6,
            'contains a !' : !field.value.includes('!'),
        };
        checkKeys = Object.keys(checks);
        checkValues = Object.values(checks);
        // if any check fails
        if (checkValues.includes(false)){
            // find the index of the first failed check
            fail_index = checkValues.findIndex((x) => x == false);
            // log the associated check's key
            console.log(field.id + ' is failing check: ' + checkKeys[fail_index] );
            return;
        }
    }

}