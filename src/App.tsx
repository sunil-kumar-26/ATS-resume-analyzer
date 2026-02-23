import { ConfigProvider } from "antd";
import "./App.css";
import { getAntdLanguage } from "./i18n";
import styled, { ThemeProvider } from "styled-components";
import useToggleTheme from "./hooks/useToggleTheme";
import { darkTheme, lightTheme } from "./theme/theme";
import Login from "./pages/Login";
import LayoutPage from "./pages/LayoutPage";

function App() {
  const { isDarkTheme} = useToggleTheme();
  return (
    <>
      <AppWrapper>
        <ConfigProvider locale={getAntdLanguage()}>
          <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            {/* <Login />
             */}
             <LayoutPage/>
          </ThemeProvider>
        </ConfigProvider>
      </AppWrapper>
    </>
  );
}

export default App;

const AppWrapper = styled.div`

`;
