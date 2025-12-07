const form = document.querySelector("form");
const emailInput = document.querySelector('input[name="email"]');
const errorBox = document.getElementById("errorBox");
const checkboxes = document.querySelectorAll('input[name="interests"]');

function validateForm(event) {
  let errorMessages = [];

  let isChecked = false;
  checkboxes.forEach((box) => {
    if (box.checked) isChecked = true;
  });

  if (!isChecked) {
    errorMessages.push(
      "- Παρακαλώ επιλέξτε τουλάχιστον έναν τομέα ενδιαφέροντος."
    );
  }

  const emailValue = emailInput.value.trim();
  if (emailValue !== "" && !emailValue.endsWith(".gr")) {
    errorMessages.push("- Το Email πρέπει να λήγει σε .gr");
  }

  if (errorMessages.length > 0) {
    event.preventDefault();
    errorBox.innerHTML =
      "<strong>Σφάλματα:</strong><br>" + errorMessages.join("<br>");
  } else {
      errorBox.innerHTML = "Σφάλματα:";
  }
}

function handleReset() {
    errorBox.innerHTML = "Σφάλματα:";
}

form.addEventListener("submit", validateForm);

form.addEventListener("reset", handleReset);
