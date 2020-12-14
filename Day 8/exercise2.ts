import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const instructions = input.split("\n");

  instructions.forEach((instruction, i) => {
    const [action, value] = instruction.split(" ");
    if (action === "jmp" || action === "nop") {
      const newList = [
        ...instructions.slice(0, i),
        `${action === "jmp" ? "nop" : "jmp"} ${value}`,
        ...instructions.slice(i + 1),
      ];
      const result = checkSequence(newList);
      if (result.valid) {
        console.log(result.acc);
      }
    }
  });
}

function checkSequence(
  instructions: string[]
): { valid: boolean; acc: number } {
  const runInstructions = new Set();
  let valid = false;
  let currentIndex = 0;
  let acc = 0;

  while (!runInstructions.has(currentIndex)) {
    if (currentIndex >= instructions.length) {
      return {
        valid: true,
        acc,
      };
    }
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
  return { valid, acc };
}
