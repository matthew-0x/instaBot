require("dotenv").config();
const instagram = require("./insta");

(async () => {
  await instagram.initialise();
  await instagram.login("test", "test2");

  debugger;
})();
