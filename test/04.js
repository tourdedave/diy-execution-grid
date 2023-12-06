const {Builder, Browser} = require('selenium-webdriver')
const {
  VisualGridRunner,
  RunnerOptions,
  Eyes,
  RectangleSize,
  Configuration,
  BatchInfo,
  BrowserType,
  DeviceName,
  ScreenOrientation,
} = require('@applitools/eyes-selenium')

describe('ping?', () => {
  let driver, runner, eyes
  before(async () => {
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
  })
  after(async () => {
    await driver.quit()
  })
  it('pong!', async () => {
    await driver.get('https://applitools.com/helloworld/')
    await eyes.open(
      driver,
      'ping?',
      'pong!',
      new RectangleSize(1200, 600)
    )
    await eyes.check()
    await eyes.close()
  })
})
