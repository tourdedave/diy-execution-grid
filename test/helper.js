const {Builder} = require('selenium-webdriver')
const {
  VisualGridRunner,
  RunnerOptions,
  Eyes,
  Configuration,
  BatchInfo,
  BrowserType,
  DeviceName,
  ScreenOrientation,
  RectangleSize,
} = require('@applitools/eyes-selenium')

async function init() {
    let driver, runner, eyes
    const caps = {
      'browserName': 'chrome',
      'goog:chromeOptions': {
          args: ['headless'],
      },
    };
    driver = await new Builder().withCapabilities(caps).build()
    runner = new VisualGridRunner(new RunnerOptions().testConcurrency(5))
    config = new Configuration()
    const batch = new BatchInfo('Platform demo')
    config.setBatch(batch)
    config.addBrowser(800, 600, BrowserType.CHROME);
    config.addBrowser(1600, 1200, BrowserType.FIREFOX);
    config.addBrowser(1024, 768, BrowserType.SAFARI);
    config.addDeviceEmulation(DeviceName.Pixel_2, ScreenOrientation.PORTRAIT);
    config.addDeviceEmulation(DeviceName.Nexus_10, ScreenOrientation.LANDSCAPE);
    eyes = new Eyes(runner)
    eyes.setConfiguration(config)
    return {driver, runner, eyes, RectangleSize}
}

module.exports = {init}
