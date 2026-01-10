const submit = document.querySelector('.submit');
const form = document.querySelector('form');

// submit.addEventListener('click', () => {
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const res = document.querySelector('#result');

  
    if (!(Number.isInteger(height) && Number.isInteger(weight))) 
        {
        res.value = "Enter valid numbers";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const feedback=bmi<18.6?"UnderWeight": bmi<24.9?"Normal":"Overweight";

    res.value = `${bmi.toFixed(2)} (${feedback})`;
});
