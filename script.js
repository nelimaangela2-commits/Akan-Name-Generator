const akanNames = {
  0: { day: "Sunday",    male: "Kwasi",   female: "Akosua" },
  1: { day: "Monday",    male: "Kwadwo",  female: "Adwoa" },
  2: { day: "Tuesday",   male: "Kwabena", female: "Abena" },
  3: { day: "Wednesday", male: "Kwaku",   female: "Akua" },
  4: { day: "Thursday",  male: "Yaw",     female: "Yaa" },
  5: { day: "Friday",    male: "Kofi",    female: "Afua" },
  6: { day: "Saturday",  male: "Kwame",   female: "Ama" }
};

const form = document.querySelector(".form-box");
const resultsDiv = document.getElementById("results");

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function showError(message) {
  resultsDiv.innerHTML = `<p class="error">${message}</p>`;
}

function showResult(info, name) {
  resultsDiv.innerHTML = `
    <div class="result-card">
      <p class="day">You were born on a ${info.day}</p>
      <p class="name">${name}</p>
      <p class="day">Your Akan day-name</p>
    </div>
  `;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);
  const genderInput = document.getElementById("gender");
  const gender = genderInput ? genderInput.value : "male";

  if (!day || !month || !year) {
    showError("Please fill in day, month, and year.");
    return;
  }

  if (day > daysInMonth(month, year)) {
    showError("That day doesn't exist in the given month/year.");
    return;
  }

  const date = new Date(year, month - 1, day);
  const weekday = date.getDay();
  const info = akanNames[weekday];
  const name = gender === "female" ? info.female : info.male;

  showResult(info, name);
});