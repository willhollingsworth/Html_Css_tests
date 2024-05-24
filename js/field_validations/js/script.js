function validate(){
    const inputs = document.querySelectorAll('input');
    for(let field of inputs){
        // list all checks below, they should match true if it's a pass
        const checks = [
            field.value.length > 0,
            field.value.length < 6,
            !field.value.includes('!'),
        ]
        // if any check fails
        if (checks.includes(false)){
            const fail_index = checks.findIndex((x) => x == false)
            console.log(field.id + ' is failing check:' + fail_index );
            return;
        }
    }

}