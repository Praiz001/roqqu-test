import hero from "../../assets/images/hero.png";
import bitcoin from "../../assets/svg/bitcoin.svg";
import binance from "../../assets/svg/binance.svg";
import tether from "../../assets/svg/tether.svg";
import etherium from "../../assets/svg/etherium.svg";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

// eslint-disable-next-line
export default {
  images: {
    hero,
    bitcoin,
  },
  heroSection: {
    date: "JANUARY 2, 2022",
    title: "Welcome to Roqqu’s Decentralized Exchange",
    desc: "With an easy-to-use interface, we provide industry-leading security and deep liquidity",
  },
  primaryBtn: {
    title: "Learn More",
  },
  walletBalCard: {
    balance: "WALLET BALANCE",
    currency: "BTC",
    value: 0.2993029,
    price: "3,700 USD",
    action: "Withdraw",
  },
  activities: {
    title: "Latest Activities",
    items: [
      {
        icon: <BsArrowUp />,
        title: "Withdrew USDT",
        date: "Dec 31, 2021",
        status: "Complete",
        value: "992333.93USDT",
      },
      {
        icon: <BsArrowLeftRight />,
        title: "Exchanged BTC",
        date: "Dec 31, 2021",
        status: "Complete",
        value: "992333.93USDT",
      },
      {
        icon: <BsArrowDown />,
        title: "Deposit ETH",
        date: "Dec 31, 2021",
        status: "Complete",
        value: "992333.93USDT",
      },
    ],
  },
  btcCard: {
    currency: "Bitcoin",
    value: "54372.94USD",
    abbr: "BTC",
    log: "+2.43%",
    image: bitcoin,
  },
  usdtCard: {
    currency: "Tether",
    value: "1.02 USD",
    abbr: "USDT",
    log: "+2.43%",
    image: tether,
  },
  ethCard: {
    currency: "Ethereum",
    value: "54372.94USD",
    abbr: "ETH",
    log: "+2.43%",
    image: etherium,
  },
  bnbCard: {
    currency: "Binance Coin",
    value: "54372.94USD",
    abbr: "BNB",
    log: "+2.43%",
    image: binance,
  },
};
