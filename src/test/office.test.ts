import { describe, expect, it } from "vitest";
import {
  WHATSAPP_NUMBER, WHATSAPP_URL, WHATSAPP_DISPLAY, MAPS_URL,
  OFFICE_ADDRESS_CONFIRMED, PUBLIC_OFFICE_ADDRESS,
} from "@/lib/office";

describe("Office contact", () => {
  it("uses the confirmed official number for display and destination", () => {
    expect(WHATSAPP_NUMBER).toBe("5567992209167");
    expect(new URL(WHATSAPP_URL).pathname).toBe("/5567992209167");
    expect(WHATSAPP_DISPLAY).toBe("+55 (67) 99220-9167");
  });

  it("keeps the unconfirmed full address and map disabled, exposing only the city", () => {
    expect(OFFICE_ADDRESS_CONFIRMED).toBe(false);
    expect(PUBLIC_OFFICE_ADDRESS).toBe("Campo Grande — MS");
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
