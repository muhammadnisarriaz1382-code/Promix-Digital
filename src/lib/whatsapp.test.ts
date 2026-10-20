import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { whatsappProjectUrl } from "./whatsapp";

describe("Contact WhatsApp destination", () => {
  test("uses the requested international number", () => {
    const url = new URL(whatsappProjectUrl);
    assert.equal(url.origin, "https://wa.me");
    assert.equal(url.pathname, "/923142043492");
  });

  test("prefills the complete requested project message", () => {
    assert.equal(new URL(whatsappProjectUrl).searchParams.get("text"),
      "Hi Promix Digital! I visited your website and would like to discuss a project. I’m interested in your website development or performance marketing services.",
    );
  });
});