const email = document.querySelector<HTMLElement>(".email");
const copyButtons = document.querySelectorAll<HTMLButtonElement>(".copyEmail");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const emailText = email?.innerText ?? "rajendramadival7@gmail.com";
    navigator.clipboard?.writeText(emailText).catch(() => {});
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  });
});

const themeButton = document.querySelector<HTMLButtonElement>("#theme");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const submitButton = document.querySelector<HTMLButtonElement>("#submit");

submitButton?.addEventListener("click", () => {
  const originalText = submitButton.innerText;
  submitButton.innerText = "Message Sent!";
  setTimeout(() => {
    submitButton.innerText = originalText;
  }, 2500);
});

const backToTopButton = document.querySelector<HTMLButtonElement>("#backToTop");

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
