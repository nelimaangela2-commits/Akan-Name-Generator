//Male Akan names
const maleNames = [
    "Kwasi", // Sunday
    "Kwadwo", //Monday
    "Kwabena", //Tuesday
    "Kwaku", //Wednesday
    "Yaw", //Thursday
    "Kofi", //Friday
    "Kwame" //Saturday
];

//Female Akan Names
const femaleNames = [
    "Akosua", //Sunday
    "Adwoa", //Monday
    "Abenaa", //Tuesday
    "Akua", //Wednesday
    "Yaa", //Thursday
    "Afua", //Friday
    "Ama" //Saturday
];

const form = document.getElementById("akanForm");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);

    // Check for a valid date
    const birthDate = new Date(year, month - 1, day);

    if (
        birthDate.getFullYear() !== year ǀǀ
        birthDate.getMonth() !== month ǀǀ
        birthDate.getDate() !== day 
    ) {
        results.innerHTML = "<p>Please enter a valid date.</p>";
        return;
    }

    //Ask the user for gender
    const gender = prompt("Enter your gender (male/female):");

    if(!gender) {
        results.innerHTML = "<p>Please enter your gender.</p>";
        return;
    }

    const dayOfWeek = birthDate.getDay();

    let akanName;

    if (gender.toLowerCase() === "male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender.toLowerCase() === "female") {
        akanName = femaleNames[dayOfWeek];
    } else {
        results.innerHTML = "<p>Please enter either 'male' or 'female'.</p>";
        return;
    }

    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    results.innerHTML = `
<h3>Your Results</h3>
<p>You were born on <strong>${weekDays[dayOfWeek]}</strong>.</p>
<p>Your Akan name is <strong>${akanName}</strong>.</p>
`;

});