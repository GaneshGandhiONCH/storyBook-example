export const Template = ({ label, className, tag, textTransform }) => {
  let button;

  if (tag === 'input') {
    button = `<input type="submit" class="button ${className} ${textTransform}" placeholder="${label}" />`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button ${className} ${textTransform}">${label}</a>`;
  }
  else if (tag === 'button') {
    button = `<button type="button" class="button ${className} ${textTransform}">${label}</button>`;
  }

  return button;
};