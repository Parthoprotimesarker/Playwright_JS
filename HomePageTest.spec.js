const{test, expect} = require('@playwright/test');


test('Home Page', async ({ page }) => {
  // Navigate to the home page
  await page.goto('https://ucamcloud.uiu.ac.bd/login?id=');

  // Check if the title contains 'Example Domain'
  await expect(page).toHaveTitle('Login | UCAM Cloud');
await expect(page).toHaveURL('https://ucamcloud.uiu.ac.bd/login?id=');
await page.close();
  
}
)

