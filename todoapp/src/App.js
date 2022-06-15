export class App {
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    console.log(formElement);
    console.log(inputElement);
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(`入力値の値:${inputElement.value}`);
    });
  }
}
