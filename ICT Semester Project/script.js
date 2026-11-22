// Filter the project cards by category.
function showCat(category, selectedButton) {
  const filterButtons = document.querySelectorAll(".filters button");

  filterButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");

  const projectCards = document.querySelectorAll(".card");

  projectCards.forEach(function (projectCard) {
    const showAllCards = category === "all";
    const cardMatchesCategory = projectCard.classList.contains(category);

    if (showAllCards || cardMatchesCategory) {
      projectCard.style.display = "block";
    } else {
      projectCard.style.display = "none";
    }
  });
}

// Copy the email address and show a short confirmation.
function copyEmail() {
  const copyButton = document.getElementById("copyBtn");
  const emailAddress = "syedsajidali228@gmail.com";

  navigator.clipboard.writeText(emailAddress)
    .then(function () {
      copyButton.textContent = "Copied!";
    })
    .catch(function () {
      copyButton.textContent = "Select and copy it manually";
    });

  setTimeout(function () {
    copyButton.textContent = "Copy email address";
  }, 2000);
}
