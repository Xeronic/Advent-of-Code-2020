import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const instructions = input.split("\n");
  const runInstructions = new Set();
  let currentIndex = 0;
  let acc = 0;

  while (!runInstructions.has(currentIndex)) {
    const [action, value] = instructions[currentIndex].split(" ");
    runInstructions.add(currentIndex);

    switch (action) {
      case "acc":
        acc += parseInt(value);
        break;
      case "jmp":
        currentIndex += parseInt(value);
        continue;
      case "nop":
        break;
    }
    currentIndex++;
  }

  console.log(acc);
}
