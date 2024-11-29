import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ez-base.onrender.com/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Email Address').fill('test1234@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('link', { name: 'Edit Profile' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByRole('button', { name: 'Update Profile' }).click();
  await page.getByRole('link', { name: 'Back to posts' }).click();
  await page.getByRole('link', { name: 'New post' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('test');
  await page.getByLabel('Content').click();
  await page.getByLabel('Content').fill('testing');
  await page.getByLabel('Post anonymously?').check();
  await page.getByRole('button', { name: 'Create Post' }).click();
  await page.getByRole('button', { name: 'Like' }).click();
  await page.getByRole('button', { name: 'Unlike' }).click();
  await page.locator('#comment_content').click();
  await page.locator('#comment_content').fill('test');
  await page.getByRole('button', { name: 'Post Comment' }).click();
  await page.getByRole('link', { name: 'Back to Posts' }).click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByLabel('Content').click();
  await page.getByLabel('Content').fill('testing111');
  await page.getByRole('button', { name: 'Update Post' }).click();
  await page.getByRole('link', { name: 'Back to Posts' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByPlaceholder('Search posts...').click();
  await page.getByPlaceholder('Search posts...').fill('deploy');
  await page.getByRole('button', { name: 'Search' }).click();
});