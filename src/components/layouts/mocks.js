import home from "../../assets/svg/home.svg";
import wallet from "../../assets/svg/wallet.svg";
import settings from "../../assets/svg/settings.svg";
import pulse from "../../assets/svg/pulse.svg";
import notifications from "../../assets/svg/notifications.svg";
import fire from "../../assets/svg/fire.svg";
import book from "../../assets/svg/book.svg";
import dashboard from "../../assets/svg/dashboard.svg";
import Hamburger from "../../assets/svg/Hamburger.svg";
import brand from "../../assets/images/brand.png";

// eslint-disable-next-line
export default {
  images: {
    home,
    wallet,
    settings,
    pulse,
    notifications,
    fire,
    book,
    brand,
    Hamburger,
    dashboard,
  },
  desktopNav: {
    title: "Roqqu Logo",
    item2: "Profile Avatar",
  },
  mobileNav: {
    navs: [
      {
        title: "Home",
        path: "/",
        icon: dashboard,
      },
      {
        title: "Exchange",
        path: "/exchange",
        icon: home,
      },
      {
        title: "Wallets",
        path: "/wallets",
        icon: wallet,
      },
      {
        title: "Prices",
        path: "/settings",
        icon: book,
      },
      {
        title: "Activities",
        path: "/",
        icon: pulse,
      },
      {
        title: "Promotions",
        path: "/",
        icon: fire,
      },
      {
        title: "Settings",
        path: "/",
        icon: settings,
      },
      {
        title: "Notifications",
        path: "/",
        icon: notifications,
      },
    ],
  },
  customDesktopNav: {
    title: "Roqqu Logo",
    item2: "Profile Avatar",
    action1: "Deposit",
    action2: "Sell Crypto",
    action3: "Transfer",
  },
  sideNav: {
    navs: [
      {
        title: "Home",
        path: "/",
        icon: dashboard,
      },
      {
        title: "Exchange",
        path: "/exchange",
        icon: home,
      },
      {
        title: "Wallets",
        path: "/wallets",
        icon: wallet,
      },
      {
        title: "Prices",
        path: "/settings",
        icon: book,
      },
      {
        title: "Activities",
        path: "/",
        icon: pulse,
      },
      {
        title: "Promotions",
        path: "/",
        icon: fire,
      },
      {
        title: "Settings",
        path: "/",
        icon: settings,
      },
      {
        title: "Notifications",
        path: "/",
        icon: notifications,
      },
    ],
  },
};
