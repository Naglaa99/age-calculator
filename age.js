const form = document.querySelector("form");
form.addEventListener('submit', calculateAge);
function calculateAge(event) {
    event.preventDefault();
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;
    const birthdate = new Date(`${year}-${month}-${day}`);

    const currentDate = new Date();
    const differenceTime = currentDate.getTime() - birthdate.getTime();

    const msPerYear = 1000 * 365 * 24 * 60 * 60;
    const msPerMonth = 1000 * 30.44 * 24 * 60 * 60;
    const msPerDay = 1000 * 24 * 60 * 60;

    const years = Math.floor(differenceTime / msPerYear);
    const months = Math.floor(differenceTime / msPerMonth % 12);
    const days = Math.floor(differenceTime / msPerDay % 30.44);

    const output = document.querySelector('.outform')
    output.innerHTML = `
    <h1><span >${years}</span>years</h1>
    <h1><span>${months}</span>months</h1>
    <h1><span>${days}</span>days</h1>
    `
}
////////////validation////////
function validateForm() {
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;
    const errorDay = document.querySelector('#error-day');
    const errorMonth = document.querySelector('#error-month');
    const errorYear = document.querySelector('#error-year');
    let isValid = true;
    if (day < 1 || day > 31) {
        errorDay.textContent = "Must be a valid day"
        isValid = false;


    }

    if (month < 1 || month > 12) {
        errorMonth.textContent = "Must be valid month"
        isValid = false;



    }

    if (year > new Date().getFullYear()) {
        errorYear.textContent = "Must be in the past"
        isValid = false;

    }

}
