export const generatePassword = (length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) => {
  let charset = '';
  let password = '';

  if (includeUpperCase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeLowerCase) {
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeNumbers) {
    charset += '0123456789';
  }
  if (includeSymbols) {
    charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  }

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
};


export default generatePassword;
