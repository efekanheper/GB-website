import f1 from "../assets/fragance1.jpeg";
import f2 from "../assets/fragance2.jpeg";
import f3 from "../assets/fragance3.jpeg";
import f4 from "../assets/fragance4.jpeg";
import f5 from "../assets/fragance5.jpeg";
import f6 from "../assets/fragance6.jpeg";
import f7 from "../assets/fragance7.jpeg";
import f8 from "../assets/fragance8.jpeg";
import f9 from "../assets/fragance9.jpeg";
import f10 from "../assets/fragance100.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Fragrances", targetId: "fragrances" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const FRAGRANCES = [
  {
    image: f1,
    title: "Viking",
    description:
      "Bergamot, Lemon, Blackcurrant, Rose, Pepper, Mint, Sandalwood, Vetiver, Cedarwood",
  },
  {
    image: f2,
    title: "African",
    description:
      "Baobab, Lemon, Ginger, Jasmine, Coffee, Cardamom, Amber, Patchouli, Sandalwood",
  },
  {
    image: f3,
    title: "HOsd",
    description:
      "Citrus, Bergamot, Black Pepper, Lavender, Jasmine, Rosemary, Musk, Amber, Cedarwood",
  },
  {
    image: f4,
    title: "Arabic",
    description:
      "Saffron, Rose, Jasmine, Agarwood, Amber, Patchouli, Sandalwood, Vanilla, Musk",
  },
  {
    image: f5,
    title: "Leather",
    description:
      "Raspberry, Saffron, Thyme, Jasmine, Olibanum, Leather, Black Suede, Amber, Woods",
  },
  {
    image: f6,
    title: "Gris",
    description:
      "Citrus, Fig, Blackcurrant, Rose, Tea, Osmanthus, Sandalwood, Amber, Musk",
  },
  {
    image: f7,
    title: "Kirke",
    description:
      "Passionfruit, Raspberry, Pear, Lily of the Valley, Jasmine, Heliotrope, Vanilla, Patchouli, Sandalwood",
  },
  {
    image: f8,
    title: "Miss",
    description:
      "Raspberry, Blackcurrant, Bergamot, Rose, Jasmine, Ylang-Ylang, Musk, Patchouli, Vanilla",
  },
  {
    image: f9,
    title: "Bleu",
    description:
      "Citrus, Grapefruit, Peppermint, Ginger, Nutmeg, Jasmine, Cedar, Sandalwood, Patchouli",
  },
  {
    image: f10,
    title: "Golden Leather",
    description:
      "Saffron, Raspberry, Thyme, Jasmine, Olibanum, Leather, Black Suede, Amber, Woods",
  },
];

export const ABOUT = {
  header: "Crafting Scents with Passion",
  content:
    "Golden Black, our dedication to creating exceptional fragrances is unparalleled. Just as an artist paints with a palette of vibrant colors, we blend the finest ingredients to craft unique and memorable scents. Our perfumes are not just products; they are experiences that evoke emotions and tell stories.Our journey began with a deep love for the world of fragrances, and over the years, we have perfected our craft. Each bottle is a testament to our commitment to quality and creativity. From fresh, invigorating notes to warm, sensual undertones, our diverse range of perfumes caters to every mood and occasion.",
};

export const MISSION =
  "Our mission is to produce unique scents that evoke emotions and create unforgettable moments.";

export const REVIEW = {
  name: "Efekan Heper",
  profession: "Fragrances Reviewer",
  content:
    "“As a longtime fragrance enthusiast, my standards are always high when trying a new perfume brand. Golden Black, with its elegant packaging and sophisticated scent descriptions, promised a unique olfactory journey. And I must say, it exceeded all my expectations, offering a sensory experience that is both luxurious and memorable.”",
};

export const CONTACT = [
  { key: "address", value: "Store: Koru Sokagi, Istanbul Turkey" },
  { key: "phone", value: "564-456-7890" },
  { key: "email", value: "goldenblack@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/efekanheper/",
    icon: <FaFacebook fontSize={30} />,
  },

  {
    href: "https://www.linkedin.com/in/efekanheper/",
    icon: <FaInstagram fontSize={30} />,
  },
  {
    href: "https://www.linkedin.com/in/efekanheper/",
    icon: <FaXTwitter fontSize={30} />,
  },
];
