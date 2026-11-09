// All contact formats derive from this number, pending office confirmation.
export const WHATSAPP_NUMBER = "5567992209167";
export const WHATSAPP_MESSAGE =
  "Olá! Acessei o site do Marcus Luz & Advogados Associados e gostaria de obter informações sobre o atendimento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const WHATSAPP_DISPLAY = WHATSAPP_NUMBER.replace(
  /^(\d{2})(\d{2})(\d{5})(\d{4})$/,
  "+$1 ($2) $3-$4",
);
export const OFFICE_ADDRESS = "Rua General Osório, 52 — Campo Grande — MS, CEP 79008-310";
export const MAPS_QUERY = "Rua General Osório, 52, Campo Grande - MS, 79008-310";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
export const OFFICE_PHOTO = "/images/marcus-luz-advogado.jpg";