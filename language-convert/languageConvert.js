const $input = document.querySelector(".input");
const $div = document.querySelector(".div");

$input.addEventListener('input', () => {
    if ($input.value === "") {
        $div.style.display = 'none';
    } else {
        $div.style.display = 'block';
    }
});