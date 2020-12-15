import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const numbers = input.split("\n").map((row) => parseInt(row));
  let backtrack = 25;

  for (let i = backtrack; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i], numbers.slice(i - backtrack, i))) {
      console.log(numbers[i]);
    }
  }
}

function isValidNumber(number: number, range: number[]): boolean {
  let valid = false;
  for (let i = 0; i < range.length; i++) {
    for (let j = 0; j < range.length; j++) {
      if (i !== j) {
        if (range[i] + range[j] === number) {
          valid = true;
        }
      }
    }
  }
  return valid;
}
