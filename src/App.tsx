import Button from "./components/atoms/button/Button";
import HeroSection from "./components/organisms/hero-section/HeroSection";

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
                <Button>button</Button>
            </ContentWrapper>
        </AppWrapper>
    );
};

export default App;
