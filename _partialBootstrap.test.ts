import { $ } from "bun";
import { expect, test } from "bun:test";
import * as path from "node:path";
import { setupTestDir } from "./util/setupTestDir";

const NAME = "partial_bootstrap";
const TEST_DIR = await setupTestDir(NAME);
$.cwd(TEST_DIR);

test(NAME, async () => {
  console.log(`Test running at ${await $`pwd`.text()}`);
  await $`git clone -b turbo --depth 1 https://github.com/tiagobento/incubator-kie-tools`;

  $.cwd(path.join(TEST_DIR, "incubator-kie-tools"));
  await $`turbo bootstrap -- -F boxed-expression-component...`;
  expect(true).toBe(true);
});
