import { describe, expect, test } from "bun:test";
import { whatsappProjectUrl } from "./whatsapp";

describe("Contact WhatsApp destination", () => {
  test("uses the requested international number", () => {
    const url = new URL(whatsappProjectUrl);
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/923142043492");
  });

  test("prefills the complete requested project message", () => {
    expect(new URL(whatsappProjectUrl).searchParams.get("text")).toBe(
      "Hi Promix Digital! I visited your website and would like to discuss a project. I’m interested in your website development or performance marketing services.",
    );
  });
});