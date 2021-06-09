import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';
import Routes from "./routes"

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
