// Official number confirmed by the office; all contact formats derive from it.
export const WHATSAPP_NUMBER = "5567992209167";
export const WHATSAPP_MESSAGE =
  "Olá! Acessei o site do Marcus Luz & Advogados Associados e gostaria de obter informações sobre o atendimento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const WHATSAPP_DISPLAY = WHATSAPP_NUMBER.replace(
  /^(\d{2})(\d{2})(\d{5})(\d{4})$/,
  "+$1 ($2) $3-$4",
);
export const OFFICE_LOCATION = "Campo Grande — MS";
// Address and services confirmed by the office.
export const OFFICE_ADDRESS_CONFIRMED = true;
export const OFFICE_ADDRESS = "Rua General Osório, 52 — Centro, Campo Grande — MS, CEP 79008-310";
export const PUBLIC_OFFICE_ADDRESS = OFFICE_ADDRESS_CONFIRMED ? OFFICE_ADDRESS : OFFICE_LOCATION;
export const MAPS_QUERY = "Rua General Osório, 52, Centro, Campo Grande - MS, 79008-310";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
export const OFFICE_PHOTO = "/images/marcus-luz-advogado.jpg";
export const OFFICE_SERVICES = [
  {
    name: "Direito Militar",
    description:
      "Orientação jurídica em questões relacionadas à carreira e aos direitos de servidores militares.",
  },
  {
    name: "Direito Previdenciário",
    description:
      "Orientação sobre benefícios, aposentadorias e demais questões junto à previdência.",
  },
  {
    name: "Direito Civil",
    description:
      "Assessoria em relações contratuais, obrigações, responsabilidade civil e demais temas do direito privado.",
  },
];
