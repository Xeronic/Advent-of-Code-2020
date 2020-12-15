import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const numbers = input.split("\n").map((row) => parseInt(row));
  let backtrack = 25;

  for (let i = backtrack; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i], numbers.slice(i - backtrack, i))) {
      console.log("Invalid number: ", numbers[i]);
      printValidSequence(numbers[i], numbers);
    }
  }
}

function printValidSequence(number: number, numbers: number[]): void {
  let checkList: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    checkList = [numbers[i]];
    for (let j = i + 1; j < numbers.length; j++) {
      if (i !== j) {
        checkList = [...checkList, numbers[j]];
        const sum = checkList.reduce((acc, n) => acc + n, 0);
        if (sum === number) {
          checkList.sort((a, b) => a - b);
          console.log(
            "Minmax: ",
            checkList[0] + checkList[checkList.length - 1]
          );
        } else if (sum > number) {
          break;
        }
      }
    }
    checkList = [];
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
