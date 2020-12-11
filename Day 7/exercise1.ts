var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (!err) main(data);
});

function main(input: string) {
  const inputList = input.split("\n");
  const map = new Map();
  inputList.forEach((item) => {
    const [key, list] = item.split(" bags contain ");
    if (list !== "no other bags.") {
      const bags = list.split(", ").map((str) =>
        str
          .replace(".", "")
          .replace(/[0-9]+/, "")
          .replace(" bags", "")
          .replace(" bag", "")
          .trim()
      );

      bags.forEach((bag) => {
        if (map.has(bag)) {
          map.set(bag, [...map.get(bag), key]);
        } else {
          map.set(bag, [key]);
        }
      });
    }
  });

  const containingBags = new Set<string>();
  traverse2("shiny gold", map, containingBags);
  console.log("Count: ", containingBags.size);
}

function traverse2(
  term: string,
  map: Map<string, string[] | null>,
  containingBags: Set<string>
) {
  const newTerms = map.get(term);

  if (newTerms) {
    newTerms.forEach((newTerm) => {
      containingBags.add(newTerm);
      traverse2(newTerm, map, containingBags);
    });
  }
}
