function isValidLetter(letter: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < letter.length; i++) {
      const currentChar: string = letter[i];

      if (currentChar === '(') {
          // Push the opening parenthesis onto the stack
          stack.push(currentChar);
      } else if (currentChar === ')') {
          // If the stack is empty, there's no matching opening parenthesis
          if (stack.length === 0) {
              return false;
          }
          // Pop the last opening parenthesis
          stack.pop();
      } else if (currentChar === '{' || currentChar === '[') {
          // If we encounter a curly or square bracket inside the parentheses, it's invalid
          if (stack.length > 0 && stack[stack.length - 1] === '(') {
              return false;
          }
      }
  }

  // If the stack is not empty, there are unmatched opening parentheses
  if (stack.length > 0) {
      return false;
  }

  // Check for empty parentheses
  for (let i = 0; i < letter.length - 1; i++) {
      if (letter[i] === '(' && letter[i + 1] === ')') {
          return false;
      }
  }

  return true;
}

// Test cases
const testCases: string[] = [
  "bici coche (balón) bici coche peluche", // ✅
  "(muñeca) consola bici", // ✅
  "bici coche (balón bici coche", // ❌
  "peluche (bici [coche) bici coche balón", // ❌
  "(peluche {) bici", // ❌
  "() bici" // ❌
];

testCases.forEach(testCase => {
  console.log(`${testCase} -> ${isValidLetter(testCase)}`);
});
