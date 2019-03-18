const puppeteer = require("puppeteer");

const BASE_URL = process.env.BASE_URL;
const USERNAME = null;
const PASSWORD = null;
const instagram = {
  browser: null,
  page: null,

  initialise: async () => {
    instagram.browser = await puppeteer.launch({ headless: false });
    instagram.page = await instagram.browser.newPage();
    await instagram.page.goto(BASE_URL, { waitUntil: "networkidle2" });
  },
  login: async (USRNAME, PASSWORD) => {
    let loginButton = await instagram.page.$x(
      `//a[contains(text(), 'Log in')]`
    );
    await loginButton[0].click();
    debugger;
  }
};

module.exports = instagram;
