document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("uploadInput");
  const message = document.getElementById("message");

  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) return;

    message.innerText = "Processing... Please wait.";

    setTimeout(() => {
      message.innerText = "Enhanced successfully! (Demo)";
    }, 3000);
  });
});
