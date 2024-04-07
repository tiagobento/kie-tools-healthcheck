import { $ } from "bun";
import { expect, test } from "bun:test";
import * as path from "node:path";
import { setupTestDir } from "./util/setupTestDir";

const NAME = "sparse_checkout";
const TEST_DIR = await setupTestDir(NAME);
$.cwd(TEST_DIR);

test(NAME, async () => {
  console.log(`Test running at ${await $`pwd`.text()}`);
  await $`bash -c ' 
  ORG="tiagobento";
  BRANCH="turbo";
  PKGS="@kie-tools/boxed-expression-component";
  bash <(curl -s https://raw.githubusercontent.com/$ORG/kie-tools/$BRANCH/scripts/sparse-checkout/run.sh) $ORG $BRANCH $PKGS;'
  `;

  $.cwd(path.join(TEST_DIR, "incubator-kie-tools"));
  await $`turbo build test test-e2e -F boxed-expression-component`;
  expect(true).toBe(true);
});
