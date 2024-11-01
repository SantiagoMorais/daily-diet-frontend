export const linkedinCreator =
  "https://www.linkedin.com/in/felipe-santiago-morais/";

function formatMessageForWeb(message: string): string {
  return encodeURIComponent(message);
}

function greetingsHour() {
  const date = new Date();
  const hour = date.getHours();
  const inTheMorning = hour >= 6 && hour < 12;
  const inTheAfternoon = hour >= 12 && hour < 18;
  const inTheNight = hour >= 18 && hour < 24;

  switch (true) {
    case inTheMorning:
      return "Bom dia";
    case inTheAfternoon:
      return "Boa tarde";
    case inTheNight:
      return "Boa noite";
    default:
      return "Olá";
  }
}

export const phoneNumber: number = 5531996951033;
const defaultWhatsappMessage: string = `${greetingsHour()}, Felipe! Encontrei o seu contato em um dos seus sites e gostaria de conversar`;
export const whatsAppLink: string = `https://api.whatsApp.com/send?phone=${phoneNumber}&text=${formatMessageForWeb(defaultWhatsappMessage)}`;

export const githubLink = "https://github.com/SantiagoMorais";
export const linkedinLink = "https://linkedin.com/in/felipe-santiago-morais";
export const emailLink = "mailto:contatofelipesantiago@gmail.com";
