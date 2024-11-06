import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'


test.describe('ProFlow', () => {
  const searchTerm = 'software testing'
  const username = 'IdAdmin'
  const password = 'EBXAw!SNDkE&28'
  const applicationName = 'NewTest001'


  test('Testing ProFlow Login', async ({ page }) => {
    await page.goto('https://stage-proflow-ui.theproindia.com/')
    await page.waitForTimeout(2000)
    await ai([
      `Enter "${username}" as the username`,
      `Enter "${password}" as the password`,
      `Click on Login`,
    ], { page, test });
    await page.waitForTimeout(4000)
    await ai([
      `Wait until "Create Application" is displayed`,
      `Click on "Create Application"`,
      `Enter "${applicationName}" as the application name`,
      `Click on Create`
    ], { page, test });
    await page.waitForTimeout(2000)

    //await ai(`Search for '${searchTerm}'`, { page, test })
    //await page.keyboard.press('Enter')

    //await page.waitForURL('https://www.google.com/search**')

    //const title = await ai(`What is the title of the first organic search result?`, { page, test })

    console.log('Test ProFlow Completed')
  })
})