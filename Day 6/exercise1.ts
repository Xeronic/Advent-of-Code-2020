import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const groups = input.split(/\n\s*\n/);
  console.log(
    groups.reduce(
      (acc, n) => acc + new Set(n.split("\n").join("").split("")).size,
      0
    )
  );
}
