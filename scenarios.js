"use strict";

describe("Stopwatch e2e tests", function () {
  describe("Check elements", function () {
    beforeEach(function () {
      browser.get("index.html");
    });

    it("should have a title", function () {
      expect(browser.getTitle()).toEqual("Stopwach");
    });

    /*it("should render stopwatch", function () {
      const stopwatch = by.css(".stopwatch");
      expect(stopwatch).toBeTruthy();
    });

    it("should render mins text", function () {
      const timeText = element(by.css(".time-text.text-align-right")).getText();
      expect(timeText).toEqual("00");
    });

    it("should render secs text", function () {
      const timeText = element(by.css(".time-text.text-align-left")).getText();
      expect(timeText).toEqual("00");
    });

    it("should render start button", function () {
      const timeText = element(by.css("[ng-click*=start]")).getText();
      expect(timeText).toEqual("Başla");
    });*/





  });
});
