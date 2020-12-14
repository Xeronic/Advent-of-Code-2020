var fs = require("fs");

export default function getInput(input: string, cb: (data: string) => any) {
  fs.readFile(input, "utf-8", function (err: object, data: string) {
    if (!err) cb(data);
  });
}
