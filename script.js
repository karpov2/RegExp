class Form {
    constructor(arg) {
        this.form = document.querySelector(`.${arg.form}`);
    }

    validation() {
        
    }
}

const form = new Form({
    form: 'form'
});

console.dir(form.form);
console.dir(form.form.elements.name);