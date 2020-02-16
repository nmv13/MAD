const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

/*const form = document.forms['search'];
if (form) {
    form.addEventListener ('submit', search, false);
}

function search() {
    alert(' Form Submitted');
}

function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}*/