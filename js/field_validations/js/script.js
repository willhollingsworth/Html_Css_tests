function validate(){
    const inputs = document.querySelectorAll('input');
    for(let field of inputs){
        const checks = [
            field.value.length > 0,
            field.value.length < 6,
            !field.value.includes('!'),
        ]
        if (checks.some((x) => x == false)){
            console.log(field.id + ' is failing a check');

            return;
        }
    }

}