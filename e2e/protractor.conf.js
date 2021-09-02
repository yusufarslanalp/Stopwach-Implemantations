exports.config = {
  directConnect: true,
  framework: "jasmine",
  // seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["scenarios.js"],
  baseUrl: "http://127.0.0.1:8000/",
  seleniumServerJar:
    "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar",
  // multiCapabilities: [{ browserName: "chrome" }, { browserName: "firefox" }],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // args: ["--headless", "--disable-gpu", "--window-size=800,600"],
    },
  },
};
