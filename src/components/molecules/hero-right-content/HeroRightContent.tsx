import React, { useEffect, useState } from "react";

import momAndBabyPhoto from "../../../assets/photos/hero-section/mom-and-baby.webp";

import { HeroRightContentWrapper, Image, Word, WordsWrapper } from "./HeroRightContent.styles";

interface HeroRightContentProps {
    heroRightContentData: string[];
}

const HeroRightContent: React.FC<HeroRightContentProps> = ({ heroRightContentData: words }) => {
    const [activeWordIndex, setActiveWordIndex] = useState(0);

    useEffect(() => {
        //calls setActiveWordIndex with 1.5seconds of delay between each call
        const interval = setInterval(() => {
            setActiveWordIndex((previousIndex) => {
                if (previousIndex === words.length - 1) {
                    return 0;
                } else {
                    return previousIndex + 1;
                }
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <HeroRightContentWrapper data-testid="hero-right-content">
            <Image src={momAndBabyPhoto} alt="woman holding her baby in the outdoors" />

            <WordsWrapper>
                {words?.map((word: string, index: number) => {
                    return (
                        <Word
                            key={`${word}-${index}`}
                            style={{
                                opacity: index === activeWordIndex ? 1 : 0.3,
                            }}
                        >
                            {word}
                        </Word>
                    );
                })}
            </WordsWrapper>
        </HeroRightContentWrapper>
    );
};

export default HeroRightContent;
