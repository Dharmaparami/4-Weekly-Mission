import { formState } from "./index.js"

export default class Form {
  constructor(formElement, inputElements) {
    this.formElement = formElement
    this.inputElements = inputElements

    this.inputEmailElement = inputElements[0]
    this.inputPasswordElement = inputElements[1]
    this.inputPasswordConfirmElement = inputElements[2]
    this.formState = formState
    this.ERROR_CLASS_NAME = "invalid"

    this.setFormData()
    this.attach()
  }

  setFormData() {
    for (const element of this.inputElements) {
      formState.data = { name: element.name, value: element.value }
    }
  }

  attach() {
    this.formElement.addEventListener("submit", this.submitHandler.bind(this))
  }
}
