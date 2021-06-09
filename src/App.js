import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';
import Routes from "./routes"

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
