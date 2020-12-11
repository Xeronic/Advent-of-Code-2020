var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (!err) main(data);
});

function main(input: string) {
  const passports = input.split(/\n\s*\n/).map((n) => n.split("\n").join(" "));

  const validPassports = passports
    .map((passport) => checkValidPassport(passport))
    .filter((valid) => valid);

  console.log("Valid passports: ", validPassports.length);
}

function checkValidPassport(passport: string) {
  const splitPassport = passport.split(" ").map((field) => field.split(":"));
  const fields = splitPassport.map((p) => p[0]);

  const validFieldLength =
    fields.length === 8 || (fields.length === 7 && !fields.includes("cid"));

  return validFieldLength;
}
