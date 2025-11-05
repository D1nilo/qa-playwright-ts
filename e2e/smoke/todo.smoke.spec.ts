import { test, expect } from '../../src/fixtures/test-base';

test.describe('TodoMVC - Smoke', () => {
  test('@smoke crear una tarea', async ({ todo }) => {
    await todo.open();
    await todo.addTask('Tarea 1');
    await todo.verifyTaskCount(1);
  });
});
