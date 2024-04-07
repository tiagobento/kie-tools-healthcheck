import { $ } from "bun";
import * as path from "node:path";

export async function setupTestDir(testName: string) {
  await $`rm -rf '../dist-tests/${testName}' && mkdir -p '../dist-tests/${testName}'`.cwd(
    import.meta.dir
  );

  return path.join(import.meta.dir, "..", "dist-tests", testName);
}
