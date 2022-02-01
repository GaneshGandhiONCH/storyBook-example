(function () {
    window.phone_mask = function (selector, defaultMatrix, matrix) {
        const phoneInputs = document.querySelectorAll(selector);
        if (!phoneInputs.length) return false;
        let keyCode;
        const currentMatrix = matrix;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            const pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            const matrix = currentMatrix;
            let i = 0;
            const def = matrix.replace(/\D/g, "");

            const val = this.value.replace(/\D/g, "");
            let new_value = matrix.replace(/[_\d]/g, function (a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });

            i = new_value.indexOf("_");

            if (i !== -1) {
                new_value = new_value.slice(0, i);
            }

            let reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");

            reg = new RegExp("^" + reg + "$");

            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }

            if ( this.value.length < defaultMatrix.length ) {
                this.value = defaultMatrix;
            }
        }

        phoneInputs.forEach(phoneInput => {
            phoneInput.addEventListener("input", mask, false);
            phoneInput.addEventListener("focus", mask, false);
            phoneInput.addEventListener("blur", function() {
                if ( this.value === defaultMatrix ) {
                    this.value = '';
                } else if (this.value.length !== matrix.length) {
                    this.value = '';
                }
            }, false);
        });
    }
})()