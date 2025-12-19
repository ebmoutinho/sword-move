import { Route, Routes } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import HeroSection from "./components/organisms/hero-section/HeroSection";

import { menuItems } from "./enums/menu-items.enums";
import { PageEnum } from "./enums/pages.enums";
import { RouteEnum } from "./enums/routes.enums";
import HomePage from "./pages/home/HomePage";

import type { MenuItemType } from "./types/MenuItems.types";

import { AppWrapper, ContentWrapper, HeroSectionWrapper } from "./App.styles";
import GlobalStyles from "./styles/global.styles";

const App: React.FC = () => {
    const filteredMenuItems: MenuItemType[] = menuItems.filter((item: MenuItemType) => {
        return item.title !== (PageEnum.Home as string);
    });

    return (
        <AppWrapper>
            <GlobalStyles />

            <Header />

            <Routes>
                <Route
                    path={RouteEnum.Home}
                    element={
                        <HeroSectionWrapper>
                            <HeroSection />
                            <HomePage />
                        </HeroSectionWrapper>
                    }
                />

                {filteredMenuItems.map((item: MenuItemType) => {
                    return (
                        <Route
                            key={item.route}
                            path={item.route}
                            element={<ContentWrapper>{item.page}</ContentWrapper>}
                        />
                    );
                })}
            </Routes>

            <Footer />
        </AppWrapper>
    );
};

export default App;
