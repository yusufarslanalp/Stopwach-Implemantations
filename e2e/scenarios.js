"use strict";

describe("User List E2e Tests", function () {
  const startBtn = element(by.css("[ng-click*=start]"));
  const stopBtn = element(by.css("[ng-click*=stop]"));
  const resetBtn = element(by.css("[ng-click*=reset]"));
  const deleteBtn = element(by.css("[ng-click*=delete]"));

  const seconds = element( by.css('.stwSecond') );
  const minutes = element(by.css('.stwMinute'));
  const hours = element(by.css('.stwHour'));



  describe("Check Page", function () {
    beforeEach(function () {
      browser.get("index.html");
    });

    it("should have a title", function () {
      browser.sleep(500);
      expect(browser.getTitle()).toEqual("Stopwach");


      
    });

    it("should render time texts", () => {
      expect(seconds.getText()).toEqual("00");
      expect(minutes.getText()).toEqual("00");
      expect(hours.getText()).toEqual("00");
    });


    it("should render buttons", () => {
      expect(startBtn.getText()).toEqual("Start");
      expect(resetBtn.getText()).toEqual("Reset");
      expect(deleteBtn.getText()).toEqual("Delete");
    });


  });

  describe("checking functionality", () => {
    beforeEach(() => {
      browser.get("index.html");
    });

    it("should start stopwatch", () => {
      startBtn.click();
      browser.sleep(900);

      expect(seconds.getText()).toEqual("01");
    });

    it("should stop stopwatch", () => {
      startBtn.click();
      browser.sleep(900);

      stopBtn.click();

      browser.sleep(900);

      expect(seconds.getText()).toEqual("01");
    });

    it("should reset stopwatch", () => {
      startBtn.click();
      browser.sleep(900);

      resetBtn.click();
      browser.sleep(900);

      expect(seconds.getText()).toEqual("00");
    });
  });



});
