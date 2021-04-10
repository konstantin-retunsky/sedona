"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".burger-ico").forEach(function (burger) {
    return burger.addEventListener("click", function (eBurger) {
      this.querySelector("span") ? this.querySelector("span").classList.toggle("burger-ico--active") : false;
    });
  });
});

var CustomValidationForm = /*#__PURE__*/function () {
  function CustomValidationForm() {
    _classCallCheck(this, CustomValidationForm);
  }

  _createClass(CustomValidationForm, null, [{
    key: "installFormvalidation",
    value: function installFormvalidation(form) {
      var _this = this;

      var btnSumbit = form.querySelector("input[type=\"submit\"], button[type=\"submit\"]");
      var inputs = form.querySelectorAll("".concat(this._useFields.map(function (typeField) {
        return "input[type='".concat(typeField, "']");
      }), ", textarea"));

      if (inputs && btnSumbit) {
        btnSumbit.addEventListener("click", function (e) {
          inputs.forEach(function (input) {
            if (input.checkValidity() === false) {
              _this._invaliditiesMessage = [];

              _this.checkValidity(input);

              input.setCustomValidity(_this._invaliditiesMessage.join(". \n"));
            }
          });
        });
      }
    }
  }, {
    key: "checkValidity",
    value: function checkValidity(input) {
      var validity = input.validity;
      var inputType = input.type;
      console.log(validity);
      console.log(inputType);

      if (validity.patternMismatch) {
        inputType in this._answers.patternMismatch ? this._addInvalidity(this._answers.patternMismatch[inputType]) : this._addInvalidity(this._answers.patternMismatch["default"]);
      }

      if (validity.valueMissing) {
        this._addInvalidity("Данное поле необходимо заполнить");
      }

      if (validity.rangeOverflow) {
        var max = getAttributeValue(input, "max");

        this._addInvalidity("Максимальное значение должно быть не больше " + max);
      }

      if (validity.rangeUnderflow) {
        var min = getAttributeValue(input, "min");

        this._addInvalidity("Минимальное значение должно быть не меньше " + min);
      }

      if (validity.tooLong) {
        var _max = getAttributeValue(input, "maxlength");

        this._addInvalidity("Максимальное количество символов не должно привышать " + _max);
      }

      if (validity.tooShort) {
        var _max2 = getAttributeValue(input, "minlength");

        this._addInvalidity("Максимальное количество символов не должно быть меньше " + _max2);
      }
    }
  }, {
    key: "_addInvalidity",
    value: function _addInvalidity(message) {
      this._invaliditiesMessage.push(message);
    }
  }]);

  return CustomValidationForm;
}();

_defineProperty(CustomValidationForm, "_invaliditiesMessage", []);

_defineProperty(CustomValidationForm, "_answers", {
  patternMismatch: {
    "default": "Данное поле заполненно неверно",
    tel: "Данное поле заполненно неверно. Пример заполнения: +7(777)777-77-77 или 77777777777",
    email: "Данное поле заполненно неверно. Пример заполнения: test@gmail.com или test@mail.ru"
  }
});

_defineProperty(CustomValidationForm, "_useFields", ["text", "tel", "email", "password", "number", //month, "week", "datetime", "date", "time"
"search", "url"]);

var feedbackForm = document.querySelector(".feedback-form");

if (feedbackForm) {
  CustomValidationForm.installFormvalidation(feedbackForm);
}

document.addEventListener("DOMContentLoaded", function (event) {
  var btnToggle = document.querySelector(".page-nav__toggle");
  var pageNavList = document.querySelector(".page-nav__list");
  var pageNavItems = document.querySelectorAll(".page-nav__item a");
  if (pageNavList) btnToggle.addEventListener("click", function () {
    if (pageNavList.classList.toggle("page-nav__list--active")) {
      btnToggle.attributes["aria-label"].value = "Закрыть меню";
      pageNavItems.forEach(function (el) {
        return el.tabIndex = 0;
      });
    } else {
      btnToggle.attributes["aria-label"].value = "Открыть меню";
      pageNavItems.forEach(function (el) {
        return el.tabIndex = -1;
      });
    }
  });
});