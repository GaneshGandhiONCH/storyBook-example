import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils.js';
import {phoneMask} from "../PhoneMask-v1/phoneMask";

export function initIntlTelInput(selector) {
  const input = document.querySelector(selector);
  if (!input) return;
  let iti;

  if (!input.hasAttribute('data-intl-tel-input-id')) {
    iti = intlTelInput(input, {
      separateDialCode: true,
      nationalMode: false,
      autoPlaceholder: 'polite',
    });

    setAttributeForMask(input);
    phoneMask();

    input.addEventListener('countrychange', function () {
      this.value = '';
      this.blur();
      setAttributeForMask(this);
    });
  }

  function setAttributeForMask(input) {
    const placeholder = input.getAttribute('placeholder');
    input.dataset.phoneMask = placeholder.replace(/[0-9]/gi, '_');
  }

  return iti;
}