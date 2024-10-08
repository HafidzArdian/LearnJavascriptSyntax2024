// Random Password Generator

function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=<>";
    
    let allowedChars = "";
    let password = "";
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";
  
  if(length <=0){
    return `(password length must be greater than 0)`;
  }
  if(allowedChars.length === 0){
    return `(at least one character type must be selected)`;
  }
  
  for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }
    
    return password;
  }
  
  const passwordLength = 12;
  const includeLowercase = false;
  const includeUppercase = false;
  const includeNumbers = true;
  const includeSymbols = false;
  
  const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  
  console.log(`Generated Password: ${password}`);
  