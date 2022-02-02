export function phoneMask() {
    // VARS
    const phoneInputs = document.querySelectorAll('[data-phone-mask]');
    if (!phoneInputs.length) return false;

    // LISTENERS
    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener("input", initMask, false);
        phoneInput.addEventListener("focus", initMask, false);
        phoneInput.addEventListener("blur", function() {
            const mask = this.dataset.phoneMask;
            const currentDefaultMask = mask.substring(0, mask.indexOf("_"));
            if (this.value.length === currentDefaultMask.length) {
                this.value = '';
            }
        }, false);
    });

    // FUNCTIONS & METHODS
    function initMask(event) {
        const mask = this.dataset.phoneMask;
        const currentDefaultMask = mask.substring(0, mask.indexOf("_"));

        // insert default mask if user try delete him
        const pos = this.selectionStart;
        if (pos < currentDefaultMask.length && event.inputType === 'deleteContentBackward') {
            event.preventDefault();
            this.value = currentDefaultMask;
            this.selectionStart = currentDefaultMask.length;
        }

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

        if (!reg.test(this.value) || this.value.length < currentDefaultMask.length) {
            this.value = new_value;
        }
    }
}
