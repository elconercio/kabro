import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Kabro",
  subTitle: "2 kabros digitales",
  brandTitle: "kabro",

  description: "Demo Site",

  site: "https://elconercio.github.io/kabro/",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/Brunodv",
    },
  ],

  username: "Kabro",
  sign: "Diseño y Desarrollo",
  avatarUrl: "https://i.pinimg.com/originals/7a/3f/a8/7a3fa89aab9f2ad2a764a737726c3311.png",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/Brunodv",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://www.instagram.com/lgbt/?hl=es",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://www.threads.net/tag/HOMOFOBIA",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://www.shutterstock.com/image-illustration/abstract-kawaii-art-style-unicorn-260nw-1806510391.jpg",
    "https://i.pinimg.com/originals/56/04/13/5604133081dacc923e3c5d96032ac60e.gif",
    "https://www.shutterstock.com/image-vector/welcome-baby-shower-cute-banner-260nw-2272551291.jpg",
    "https://img.freepik.com/vector-gratis/banner-linkedin-negocios-degradado_23-2150091566.jpg",
    "https://img.freepik.com/premium-vector/banner-kawaii-cat-is-giving-love-letter-you-good-day_75474-1127.jpg",
    "https://wallpapers.com/images/hd/gay-anime-z1lt5mvg3h68opf4.jpg",
    "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fzwprm17ro4i51.png%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Df6028e6648f247f9de9959be0209ac4130251570",
    "https://i.pinimg.com/originals/fe/0e/21/fe0e21af0db0b29c33a866d16b7e5392.gif",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
