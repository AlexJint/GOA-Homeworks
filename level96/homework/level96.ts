
function formatInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * input;
  }
}


console.log(formatInput("hela")); 
console.log(formatInput(5));      