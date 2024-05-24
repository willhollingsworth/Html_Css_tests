function validate(){
    const INPUTS = document.querySelectorAll('input');
    let checks = {};
    let checkKeys = [];
    let checkValues = [];
    let fail_index = 0;

    for(let field of INPUTS){
        // list all checks below, they should match true if it's a pass
        checks = {
            'too small' : field.value.length > 0,
            'too large' : field.value.length < 6,
            'contains a !' : !field.value.includes('!'),
        };
        checkKeys = Object.keys(checks);
        checkValues = Object.values(checks);
        // if any check fails
        if (checkValues.includes(false)){
            fail_index = checkValues.findIndex((x) => x == false)
            console.log(field.id + ' is failing check: ' + checkKeys[fail_index] );
            return;
        }
    }

}