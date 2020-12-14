import getInput from "../utils/getInput";

getInput("input.txt", main);

function main(input: string) {
  const groups = input.split(/\n\s*\n/);
  console.log(
    groups.reduce((acc, n) => {
      const yeses: any = {};
      const people = n.split("\n");
      people.forEach((person) => {
        person
          .split("")
          .forEach((char) => (yeses[char] ? yeses[char]++ : (yeses[char] = 1)));
      });

      return (
        acc +
        Object.keys(yeses).filter((yes) => yeses[yes] === people.length).length
      );
    }, 0)
  );
}
