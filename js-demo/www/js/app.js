import { showMessage as showMessage2, secondFn } from "./utils.js";

// import utils from "./utils.js";

function showMessage() {}

utils.showMessage("this is cool!");
// utils.secondFn();

if (true) {
  utils.secondFn()
}

const propName = "secondFn";

utils[propName]();
