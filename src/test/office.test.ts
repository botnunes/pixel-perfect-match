import { describe, expect, it } from "vitest";
import { WHATSAPP_NUMBER, WHATSAPP_URL, WHATSAPP_DISPLAY, MAPS_URL } from "@/lib/office";

describe("Office contact", () => {
  it("preserves the existing number while confirmation is pending", () => {
    expect(WHATSAPP_NUMBER).toBe("5567992209167");
    expect(new URL(WHATSAPP_URL).pathname).toBe("/5567992209167");
    expect(WHATSAPP_DISPLAY).toBe("+55 (67) 99220-9167");
  });

  it("prefills the exact requested WhatsApp message", () => {
    expect(new URL(WHATSAPP_URL).searchParams.get("text")).toBe(
      "Olá! Acessei o site do Marcus Luz & Advogados Associados e gostaria de obter informações sobre o atendimento.",
    );
  });

  it("does not present the unconfirmed neighborhood in the Maps query", () => {
    expect(new URL(MAPS_URL).searchParams.get("query")).toBe(
      "Rua General Osório, 52, Campo Grande - MS, 79008-310",
    );
  });
});