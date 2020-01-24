const buttons = document.querySelectorAll(".show-details");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const details = document.querySelector(
      `[data-details="${e.target.getAttribute("data-target")}"]`
    );
    details.classList.add("details-show");
    details.addEventListener("click", e => {
      console.log(e.target.getAttribute("data-function"));
      if (e.target.getAttribute("data-function") === "close") {
        details.classList.remove("details-show");
      }
    });
  });
});
