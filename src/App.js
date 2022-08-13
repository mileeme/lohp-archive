import { ThemeProvider } from "@emotion/react";
import { theme } from "./Styles/theme";
import HeaderTabs from "./Components/Header/HeaderTabs";
// import PageNotification from "./Components/Header/PageNotification";
import Header from "./Components/Header/Header";
import HeaderCombined from "./Components/Header/HeaderCombined";
import Main from "./Sections/Main";
import Footer from "./Sections/Footer";
import "./Styles/index.css";
import "./Styles/normalize.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <PageNotification /> */}
      {/* <HeaderTabs />
      <Header /> */}
      <HeaderCombined />
      {/* <HeaderSearch /> */}
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
