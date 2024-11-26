

const checkbox = document.getElementById("myCheckbox");
const textInput = document.getElementById("myText");

// Habilita ou desabilita a escrita no campo de texto
checkbox.addEventListener("change", () => {
    textInput.disabled = !checkbox.checked;
});