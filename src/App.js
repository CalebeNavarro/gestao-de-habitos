import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
