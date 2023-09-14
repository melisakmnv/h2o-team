export const formatFrenchNumber = (number) => {
  return number.replace(/(.{2})/g, '$& ',) //format FR //format belge fixe
}

export const formatBelgianPhoneNumber = (number) => {
  return number.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
}

export const formatNumber = (number, area) => {
  if (number.length > 8 && (number.charAt(0) === '0')) {
    number = number.replace(/^0/, '');
  }
  if (area === "33") {
    number = number.replace(/^(\d{1})/, '$1 ').replace(/(\d{2})(?=\d)/g, '$1 ');
  } if (area === "32") {
    let formattedNumber = number.toString();
    formattedNumber = formattedNumber.slice(0, 3) + ' ' + formattedNumber.slice(3);

    for (let i = 6; i < formattedNumber.length; i += 3) {
      formattedNumber = formattedNumber.slice(0, i) + ' ' + formattedNumber.slice(i);
    }

    number = formattedNumber;
  }
  return "(0)" + number
}