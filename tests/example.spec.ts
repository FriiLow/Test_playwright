import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

test('Submit form with valid data', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  // Remplacez les sélecteurs CSS par les bons sélecteurs pour votre formulaire
  await page.fill('input[name=firstName]', 'John');
  await page.fill('input[name=lastName]', 'Doe');
  await page.fill('input[name=username]', 'john_doe');
  await page.fill('input[name=city]', 'New York');
  await page.fill('input[name=state]', 'NY');
  await page.fill('input[name=zip]', '10001');
  await page.check('input[name=terms]');
  await page.click('button[type=submit]');
});

test('Submit form with unvalid data', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  // Remplacez les sélecteurs CSS par les bons sélecteurs pour votre formulaire

  await page.click('button[type=submit]');
});

test('Go yuginews', async ({ page }) => {
  await page.goto('https://yuginews.fr/');
  await page.locator('#et-menu #et-search-icon').click();
  await page.getByRole('searchbox', { name: 'Rechercher:' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher:' }).fill('dragon');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.getByRole('heading', { name: 'Résultats de recherche pour:' })).toBeVisible();
});

test('Auto commande carte', async ({ page }) => {
  await page.goto('https://www.cardmarket.com/fr/YuGiOh');
  await page.getByPlaceholder('Rechercher Cardmarket...').click();
  await page.getByPlaceholder('Rechercher Cardmarket...').fill('little kn');
  await page.getByPlaceholder('Rechercher Cardmarket...').click();
  await page.getByPlaceholder('Rechercher Cardmarket...').fill('little knight');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'S:P Petite Chevaleresse (V.1 - Super Rare)' }).click();
  await expect(page.getByRole('heading', { name: 'S:P Petite Chevaleresse (V.1' })).toBeVisible();
});

