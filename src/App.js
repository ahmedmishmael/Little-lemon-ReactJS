import { Fragment, React } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Fragment className="App">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
