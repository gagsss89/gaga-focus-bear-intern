const wdio = require('webdriverio');

async function main() {
  console.log('Connecting to Appium server...');

  const opts = {
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4725, // Appium port
    path: '/', // ✅ Appium v3 does NOT use /wd/hub anymore
    capabilities: {
      platformName: 'Windows',
      'appium:automationName': 'Windows',
      'appium:deviceName': 'WindowsPC',
      'appium:app': 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App',
    },
  };

  try {
    const driver = await wdio.remote(opts);
    console.log('✅ Connected to Calculator!');

    await driver.$('~num1Button').click();
    await driver.$('~plusButton').click();
    await driver.$('~num2Button').click();
    await driver.$('~equalButton').click();

    const result = await driver.$('~CalculatorResults');
    console.log('🧮 Result:', await result.getText());

    await driver.deleteSession();
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();
