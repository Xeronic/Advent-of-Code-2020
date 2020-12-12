var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (!err) main(data);
});

function main(input: string) {
  const inputList = input.split("\n");
  const map = new Map<string, null | Array<{ count: number; name: string }>>();
  inputList.forEach((item) => {
    const [key, list] = item.split(" bags contain ");
    if (list !== "no other bags.") {
      const bags = list
        .split(", ")
        .map((str) =>
          str.replace(".", "").replace(" bags", "").replace(" bag", "").trim()
        );
      const countBags = bags.map((bag) => ({
        count: parseInt(bag.match(/[0-9]+/)?.[0] || "") || 0,
        name: bag.replace(/[0-9]+/, "").trim(),
      }));
      map.set(key, countBags);
    } else {
      map.set(key, null);
    }
  });

  const count = traverse("shiny gold", map, 1);
  console.log("Count: ", count - 1);
}

function traverse(
  term: string,
  map: Map<string, Array<{ count: number; name: string }> | null>,
  count: number
): number {
  const newTerms = map.get(term);
  if (newTerms === null || newTerms === undefined) {
    return count;
  }

  let totalCount = 0;
  newTerms.forEach((newTerm, i) => {
    totalCount += count * traverse(newTerm.name, map, newTerm.count);
  });
  return count + totalCount;
}
