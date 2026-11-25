function showCat(category, button) {
  document.querySelectorAll(".filters button").forEach(function (b) {
    b.classList.remove("active");
  });
  button.classList.add("active");

  document.querySelectorAll(".project").forEach(function (p) {
    p.style.display =
      category === "all" || p.classList.contains(category) ? "flex" : "none";
  });
}

function copyEmail() {
  navigator.clipboard.writeText("syedsajidali228@gmail.com");
  var button = document.getElementById("copyBtn");
  button.textContent = "Copied!";
  setTimeout(function () {
    button.textContent = "Copy email";
  }, 1800);
}

document.getElementById("themeBtn").onclick = function () {
  document.body.classList.toggle("light");
  this.textContent = document.body.classList.contains("light") ? "☾" : "☼";
};