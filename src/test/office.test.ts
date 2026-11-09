import { describe, expect, it } from "vitest";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  MAPS_URL,
  OFFICE_ADDRESS_CONFIRMED,
  PUBLIC_OFFICE_ADDRESS,
  OFFICE_SERVICES,
} from "@/lib/office";

describe("Office contact", () => {
  it("uses the confirmed official number for display and destination", () => {
    expect(WHATSAPP_NUMBER).toBe("5567992209167");
    expect(new URL(WHATSAPP_URL).pathname).toBe("/5567992209167");
    expect(WHATSAPP_DISPLAY).toBe("+55 (67) 99220-9167");
  });

  it("exposes the confirmed full office address and enables the map", () => {
    expect(OFFICE_ADDRESS_CONFIRMED).toBe(true);
    expect(PUBLIC_OFFICE_ADDRESS).toBe(
      "Rua General Osório, 52 — Centro, Campo Grande — MS, CEP 79008-310",
    );
  });

  it("offers exactly the three confirmed legal practice areas", () => {
    expect(OFFICE_SERVICES.map((service) => service.name)).toEqual([
      "Direito Militar",
      "Direito Previdenciário",
      "Direito Civil",
    ]);
  });

  it("prefills the exact requested WhatsApp message", () => {
    expect(new URL(WHATSAPP_URL).searchParams.get("text")).toBe(
      "Olá! Acessei o site do Marcus Luz & Advogados Associados e gostaria de obter informações sobre o atendimento.",
    );
  });

  it("uses the confirmed address and neighborhood for Maps", () => {
    expect(new URL(MAPS_URL).searchParams.get("query")).toBe(
      "Rua General Osório, 52, Centro, Campo Grande - MS, 79008-310",
    );
  });
});
