import Button from "./components/atoms/button/Button";

import GlobalStyles from "./styles/global.styles";

function App() {
    return (
        <div
            style={{
                padding: "var(--spacing-24)",
            }}
        >
            <GlobalStyles />
            text
            <Button onClick={() => console.log("button clicked")}>Button text</Button>
        </div>
    );
}

export default App;
