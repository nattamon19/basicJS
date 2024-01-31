function isValidPassword(password) {
    if (
      password === undefined ||
      password === null ||
      password === "" ||
      password.length < 8
    ) {
      return false;
    }
  
    // Check for at least one uppercase letter
    if (
      !password.match(/[a-z]/g)?.length >= 1 &&
      !password.match(/[A-Z]/g)?.length >= 1 &&
      !password.match(/[@#$%^&*!]/g)?.length >= 1 &&
      !password.match(/[0-9]/g)?.length >= 1
    ) {
      return false;
    }
  
    // All conditions met
    return true;
  }
  
  // Test cases
  console.log(isValidPassword(undefined)); // false
  console.log(isValidPassword(null)); // false
  console.log(isValidPassword("")); // false
  console.log(isValidPassword("ab!12")); // false
  console.log(isValidPassword("1234abcd")); // false
  console.log(isValidPassword("Zky543#@")); // true
  console.log(isValidPassword("1#@!*aB^5")); // true
  console.log(isValidPassword("%5Ko&$pp")); // true
  console.log(isValidPassword("12345abcxyZ$")); // true