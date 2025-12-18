import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/organisms/header/Header";
import HeroSection from "./components/organisms/hero-section/HeroSection";

import { RouteEnum } from "./enums/routes.enums";
import GettingStartedPage from "./pages/getting-started/GettingStartedPage";
import HomePage from "./pages/home/HomePage";

import { AppWrapper, ContentWrapper } from "./App.styles";
import GlobalStyles from "./styles/global.styles";

const App: React.FC = () => {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    return (
        <AppWrapper>
            <GlobalStyles />

            <Header />

            {isHomepage && <HeroSection />}

            {!isHomepage && (
                <ContentWrapper>
                    <Routes>
                        <Route path={RouteEnum.Home} element={<HomePage />} />
                        <Route path={RouteEnum.GettingStarted} element={<GettingStartedPage />} />
                    </Routes>
                </ContentWrapper>
            )}
        </AppWrapper>
    );
};

export default App;
