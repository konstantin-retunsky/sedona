class CustomValidationForm {
	static _invaliditiesMessage = []
	static _answers = {
		patternMismatch: {
			default: "Данное поле заполненно неверно",
			tel:
				"Данное поле заполненно неверно. Пример заполнения: +7(777)777-77-77 или 77777777777",
			email:
				"Данное поле заполненно неверно. Пример заполнения: test@gmail.com или test@mail.ru",
		},
	}

	static _useFields = [
		"text",
		"tel",
		"email",
		"password",
		"number", //month, "week", "datetime", "date", "time"
		"search",
		"url",
	]

	static installFormvalidation(form) {
		let btnSumbit = form.querySelector(
			`input[type="submit"], button[type="submit"]`
		)

		let inputs = form.querySelectorAll(
			`${this._useFields.map(
				(typeField) => `input[type='${typeField}']`
			)}, textarea`
		)

		if (inputs && btnSumbit) {
			btnSumbit.addEventListener("click", (e) => {
				inputs.forEach((input) => {
					if (input.checkValidity() === false) {
						this._invaliditiesMessage = []
						this.checkValidity(input)
						input.setCustomValidity(this._invaliditiesMessage.join(". \n"))
					}
				})
			})
		}
	}

	static checkValidity(input) {
		let validity = input.validity
		let inputType = input.type

		if (validity.patternMismatch) {
			inputType in this._answers.patternMismatch
				? this._addInvalidity(this._answers.patternMismatch[inputType])
				: this._addInvalidity(this._answers.patternMismatch.default)
		}

		if (validity.valueMissing) {
			this._addInvalidity("Данное поле необходимо заполнить")
		}

		if (validity.rangeOverflow) {
			let max = getAttributeValue(input, "max")
			this._addInvalidity("Максимальное значение должно быть не больше " + max)
		}

		if (validity.rangeUnderflow) {
			let min = getAttributeValue(input, "min")
			this._addInvalidity("Минимальное значение должно быть не меньше " + min)
		}

		if (validity.tooLong) {
			let max = getAttributeValue(input, "maxlength")
			this._addInvalidity(
				"Максимальное количество символов не должно привышать " + max
			)
		}

		if (validity.tooShort) {
			let max = getAttributeValue(input, "minlength")
			this._addInvalidity(
				"Максимальное количество символов не должно быть меньше " + max
			)
		}
	}

	static _addInvalidity(message) {
		this._invaliditiesMessage.push(message)
	}
}

let feedbackForm = document.querySelector(".feedback-form")

if (feedbackForm) {
	CustomValidationForm.installFormvalidation(feedbackForm)
}
