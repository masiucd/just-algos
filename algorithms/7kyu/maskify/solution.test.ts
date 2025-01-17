import {assertEquals} from "@std/assert";
import {maskify, maskifyV2} from "./solution.ts";

Deno.test("4556364607935616", () => {
  let got = maskify("4556364607935616");
  let want = "############5616";
  assertEquals(got, want);

  got = maskifyV2("4556364607935616");
  assertEquals(got, want);
});

Deno.test("11111", () => {
  let got = maskify("11111");
  let want = "#1111";
  assertEquals(got, want);

  got = maskifyV2("11111");
  assertEquals(got, want);
});

Deno.test("1", () => {
  let got = maskify("1");
  let want = "1";
  assertEquals(got, want);

  got = maskifyV2("1");
  assertEquals(got, want);
});
