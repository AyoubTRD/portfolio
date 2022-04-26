const buttons = document.querySelectorAll(".show-details");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const details = document.querySelector(
      `[data-details="${e.target.getAttribute("data-target")}"]`
    );
    details.classList.add("details-show");
    details.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("data-function"));
      if (e.target.getAttribute("data-function") === "close") {
        details.classList.remove("details-show");
      }
    });
  });
});

const form = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
form.onsubmit = async (e) => {
  e.preventDefault();
  const email = contactEmail.value;
  const name = contactName.value;
  const message = contactMessage.value;
  try {
    await fetch("https://trd-mailer.herokuapp.com/notify-self", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `Message from ${name}`,
        message: `<h6>Sender: ${email}</h6>
      <br>
      ${message}
      `,
      }),
    });
    alert(
      "We have received your message successfully, we will reply as soon as possible"
    );
  } catch (e) {
    alert("An error ocurred");
  }
  form.reset();
};
