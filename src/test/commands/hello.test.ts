import { expect, test } from "@oclif/test";

describe("auth:whoami", () => {
  test    
    .command(["auth:whoami"])
    .it("shows hellow world", (ctx) => {
      expect(ctx.stdout).to.equal("hello world from ./src/hello.ts!\n");
    });
});
