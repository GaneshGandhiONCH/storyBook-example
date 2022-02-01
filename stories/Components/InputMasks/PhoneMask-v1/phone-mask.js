
export function phoneMask(selector, defaultMask, mask) {
    const phoneInputs = document.querySelectorAll(selector);
    if (!phoneInputs.length) return false;
    let keyCode;
    const currentMask = mask;

    function initMask(event) {
        event.keyCode && (keyCode = event.keyCode);
        const pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        const mask = currentMask;
        let i = 0;
        const def = mask.replace(/\D/g, "");

        const val = this.value.replace(/\D/g, "");
        let new_value = mask.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });

        i = new_value.indexOf("_");

        if (i !== -1) {
            new_value = new_value.slice(0, i);
        }

        let reg = mask.substr(0, this.value.length).replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");

        reg = new RegExp("^" + reg + "$");

        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
        }

        if (this.value.length < defaultMask.length) {
            this.value = defaultMask;
        }
    }

    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener("input", initMask, false);
        phoneInput.addEventListener("focus", initMask, false);
        phoneInput.addEventListener("blur", function() {
            if (this.value.length !== mask.length) {
                this.value = '';
            }
        }, false);
    });
}
