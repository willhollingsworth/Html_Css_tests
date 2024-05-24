function validate(){
    const INPUTS = document.querySelectorAll('input');
    let CHECKS = {};
    let CHECK_KEYS = [];
    let CHECK_VALUES = [];
    let fail_index = 0;

    for(let field of INPUTS){
        // list all checks below, they should match true if it's a pass
        CHECKS = {
            'too small' : field.value.length > 0,
            'too large' : field.value.length < 6,
            'contains a !' : !field.value.includes('!'),
        };
        CHECK_KEYS = Object.keys(CHECKS);
        CHECK_VALUES = Object.values(CHECKS);
        // if any check fails
        if (CHECK_VALUES.includes(false)){
            fail_index = CHECK_VALUES.findIndex((x) => x == false)
            console.log(field.id + ' is failing check: ' + CHECK_KEYS[fail_index] );
            return;
        }
    }

}