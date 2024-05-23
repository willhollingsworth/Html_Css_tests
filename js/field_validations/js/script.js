function validate(){
    const inputs = document.querySelectorAll('input');
    for(let field of inputs){
        if (field.value.length == 0){
            console.log(field.id, 'is blank');
            field.focus();
            return;
        }
    }

}