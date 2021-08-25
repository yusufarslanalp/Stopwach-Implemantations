exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["stopwatch.component.js"],
  baseUrl: "http://127.0.0.1:8000/",
};
