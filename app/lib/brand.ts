// Informações institucionais fornecidas pela cliente; sem integração ao vivo.
export const brand = {
  name: "Sayonara Andrade",
  businessName: "Sayonara Andrade Advocacia",
  phone: "(31) 99877-0607",
  phoneDigits: "5531998770607",
  whatsappDigits: "5531998770607",
  address: "Rua Amando Filho, 181 — Centro, Pedro Leopoldo — MG, 33600-000",
  location: "Pedro Leopoldo · Minas Gerais",
  logo: "/sayonara-andrade-logo.png",
  portrait: "/sayonara-andrade-retrato.png",
  googleReviewCount: 21,
  instagram: "https://www.instagram.com/sayonaraandrad/",
  instagramHandle: "@sayonaraandrad",
};

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Sayonara! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dra. Sayonara! Gostaria de informações sobre uma consulta presencial ou on-line.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = "https://www.google.com/maps?cid=17282138095684241057";
