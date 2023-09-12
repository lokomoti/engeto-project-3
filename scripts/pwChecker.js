// Password checker
// Tento udělám OOP

export default class PWChecker {
  constructor() {
    this.first_input = document.getElementById("password-1");
    this.second_input = document.getElementById("password-2");
    this.errorMsg = document.querySelector(".password-invalid");

    this.init();
  }

  init() {
    this.first_input.addEventListener("input", () => this.validate());
    this.second_input.addEventListener("input", () => this.validate());
  }

  validate() {
    if (!this.inputsEmpty()) {
      this.hideError(this.passwordMatched());
    } else {
      this.hideError(true);
    }
  }

  passwordMatched() {
    return this.first_input.value === this.second_input.value;
  }

  inputsEmpty() {
    return this.first_input.value === "" && this.second_input.value === "";
  }

  hideError(display) {
    this.errorMsg.style.display = display === false ? "inline" : "none";
  }
}
