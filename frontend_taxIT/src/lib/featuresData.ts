import icon1 from "@/assets/images/MoneyTransfer.svg";
import icon2 from "@/assets/images/Security.svg";
import icon3 from "@/assets/images/EMI.svg";
import { FeaturedData } from "../types";

export const individualFeaturedData: FeaturedData = [
    {
        id: 1,
        title: "User Friendly",
        description: "Highly responsive and easy to navigate.",
        icon: icon1,
    },
    {
        id: 2,
        title: "Secure",
        description:
            "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.",
        icon: icon2,
    },
    {
        id: 3,
        title: "Fast",
        description:
            "Transacting takes only a few seconds - it's convenient and safe.",
        icon: icon3,
    },
];

export const BusinnessFeaturedData: FeaturedData = [
    {
        id: 1,
        title: "User Friendly",
        description: "Buy and sell popular digital currencies, keep track of them in the one place.",
        icon: icon1,
    },
    {
        id: 2,
        title: "Secure",
        description:
            "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
        icon: icon2,
    },
    {
        id: 3,
        title: "Fast",
        description:
            "Supports a variety of the most popular digital currencies and always uptodate.",
        icon: icon3,
    },
];
