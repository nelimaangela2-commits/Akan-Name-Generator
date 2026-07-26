//Male Akan names
const maleNames = [
    "Kwasi", //Sunday
    "Kwadwo", //Monday
    "Kwabena", //Tuesday
    "Kwaku", //Wednesday
    "Yaw", //Thursday
    "Kofi", //Friday
    "Kwame" //Saturday
];

//Female Akan names
const femaleNames = [
    "Akosua", //Sunday
    "Adwoa", //Monday
    "Abenaa", //Tuesday
    "Akua", //Wednesday
    "Yaa", //Thursday
    "Afua", //Friday
    "Ama" //Saturday
];

//Days of the week
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const form = document.getElementById("akanForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if(day < 1 || day > 31){
        alert("Enter a valid day.");
        return;
    }

    if(month < 1 || month > 12){
        alert("Enter a valid month.");
        return;
    }

    if(!gender){
        alert("Please select a gender.");
        return;
    }

    // Split year
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    // Formula
    const dayOfWeek = (
        ((CC / 4) - (2 * CC) - 1 +
        ((5 * YY) / 4) +
        ((26 * (month + 1)) / 10) +
        day)
    );

    const index = ((Math.floor(dayOfWeek) % 7) + 7) % 7;

    const birthDay = daysOfWeek[index];

    let akanName;

    if(gender.value === "male"){
        akanName = maleNames[index];
    }else{
        akanName = femaleNames[index];
    }

    document.getElementById("result").textContent =
        `You were born on ${birthDay}. Your Akan name is ${akanName}!`;
});