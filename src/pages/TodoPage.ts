import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly listItems: Locator;

  constructor(page: Page) {
    this.page = page;
    // Selector estable del proyecto TodoMVC
    this.input = page.locator('input.new-todo');
    this.listItems = page.locator('ul.todo-list li');
  }

  async open() {
    // usa baseURL del config; si no existe, ve directo
    const url = process.env.BASE_URL || 'https://demo.playwright.dev/todomvc';
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.input).toBeVisible();
  }

  async addTask(name: string) {
    await this.input.fill(name);
    await this.input.press('Enter');
  }

  async verifyTaskCount(expected: number) {
    await expect(this.listItems).toHaveCount(expected);
  }
}
