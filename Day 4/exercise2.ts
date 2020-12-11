var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (!err) main(data);
});

function main(input: string) {
  const passports = input.split(/\n\s*\n/).map((n) => n.split("\n").join(" "));

  const validPassports = passports
    .map((passport) => checkValidPassport(passport))
    .filter((valid) => valid);
}

function checkValidPassport(passport: string) {
  const splitPassport = passport.split(" ").map((field) => field.split(":"));
  const fields = splitPassport.map((p) => p[0]);

  const validFieldLength =
    fields.length === 8 || (fields.length === 7 && !fields.includes("cid"));
  const validFieldData = checkValidPassportFields(
    splitPassport as [[string, string]]
  );

  return validFieldData && validFieldLength;
}

function checkValidPassportFields(
  splitPassportFields: Array<[string, string]>
): boolean {
  let valid = true;
  splitPassportFields.forEach(([key, value]) => {
    if (!checkValidPassportField(key, value)) {
      valid = false;
    }
  });
  return valid;
}

function checkValidPassportField(key: string, value: string): boolean {
  switch (key) {
    case "byr":
      return (
        value.length === 4 && parseInt(value) >= 1920 && parseInt(value) <= 2002
      );
    case "iyr":
      return (
        value.length === 4 && parseInt(value) >= 2010 && parseInt(value) <= 2020
      );
    case "eyr":
      return (
        value.length === 4 && parseInt(value) >= 2020 && parseInt(value) <= 2030
      );
    case "hgt":
      const height = value.match(/[0-9]+/)?.[0] || 0;
      const suffix = value.match(/[a-zA-Z]+/)?.[0] || "";

      if (suffix === "cm") {
        return height >= 150 && height <= 193;
      } else {
        return height >= 59 && height <= 76;
      }

    case "hcl":
      return (
        value.startsWith("#") &&
        value.substr(1).match(/[0-9a-f]+/)?.[0].length === 6
      );

    case "ecl":
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);

    case "pid":
      return value.match(/[0-9]+/)?.[0].length === 9;
    default:
      return true;
  }
}
