const {init} = require('./helper')

describe('ping?', () => {
  it('pong!', async () => {
    const {driver, eyes, RectangleSize} = await init()
    try {
      await driver.get('https://applitools.com/helloworld/')
      await eyes.open(
        driver,
        'ping?',
        'pong!',
        new RectangleSize(1200, 600)
      )
      await eyes.check()
      await eyes.close()
    } finally {
      await driver.quit()
    }
  })
})
