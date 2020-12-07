var fs = require("fs");

fs.readFile("input.txt", "utf-8", function (err: object, data: string) {
  if (err) {
    console.log("Error: ", err);
  }
  main(data);
});

function main(input: string) {
  const passwordList = input.split("\n");
  const validPasswords = passwordList.filter((password) =>
    checkValidPassword(password)
  );
  console.log("Valid: ", validPasswords.length);
}

function checkValidPassword(passwordWithPolicy: string) {
  const [policy, password] = passwordWithPolicy.split(": ");
  const [range, character] = policy.split(" ");
  const [min, max] = range.split("-").map((s) => parseInt(s));

  if (
    password.charAt(min - 1) === character &&
    password.charAt(max - 1) === character
  )
    return false;

  return (
    password.charAt(min - 1) === character ||
    password.charAt(max - 1) === character
  );
}
