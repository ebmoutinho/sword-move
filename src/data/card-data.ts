import gettingStarted01 from "../assets/photos/starting-steps/getting-started-01.webp";
import gettingStarted02 from "../assets/photos/starting-steps/getting-started-02.webp";
import gettingStarted03 from "../assets/photos/starting-steps/getting-started-03.webp";
import type { CardType } from "../types/Card.types";

export const cardData: CardType[] = [
    {
        id: 1,
        imageUrl: gettingStarted01,
        alt: "woman working on her computer at home desk",
        title: "Share a little about yourself",
        description: "We'll learn about your goals, motivation and lifestyle.",
    },
    {
        id: 2,
        imageUrl: gettingStarted02,
        alt: "woman looking at her cellphone at her home desk",
        title: "Match with a Physical Health Specialist",
        description: "You'll work together to set the right plan to help you achieve your 'why'.",
    },
    {
        id: 3,
        imageUrl: gettingStarted03,
        alt: "woman exercising in her mat at home",
        title: "Receive a tailored weekly Move Plan",
        description: "With achievable activities and daily step goals that evolve as you do.",
    },
];
