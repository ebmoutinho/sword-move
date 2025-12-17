import HeroSection from "./components/organisms/hero-section/HeroSection";
import StartingSteps from "./components/organisms/starting-steps/StartingSteps";

import { cardData } from "./data/card-data";

import { AppWrapper, ContentWrapper, HeroSectionWrapper } from "./App.styles";
import GlobalStyles from "./styles/global.styles";

const App: React.FC = () => {
    return (
        <AppWrapper data-test="AppWrapper">
            <GlobalStyles />

            <HeroSectionWrapper data-test="HeroSectionWrapper">
                <HeroSection />
            </HeroSectionWrapper>

            <ContentWrapper data-test="ContentWrapper">
                <StartingSteps cardData={cardData} />
            </ContentWrapper>
        </AppWrapper>
    );
};

export default App;
