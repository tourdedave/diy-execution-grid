const {init} = require('./helper')

describe('ping?', () => {
  it('pong!', async () => {
    const {driver, blink} = await init()
    try {
      await driver.get('https://applitools.com/helloworld/')
      await blink({
        driver,
        appName: 'ping?',
        testName: 'pong!',
        viewportSize: {width: 1200, height: 600},
      })
    } finally {
      await driver.quit()
    }
  })
})
