import Footer from "./components/Footer";
import Header from "./components/Header";
import Burger from "./components/burger/Burger";
import Pitsa from "./components/pitsa/Pitsa";

const App = () => {
  return (
    <>
      <Header />
      <Pitsa />
      <Burger />
      <Footer />
    </>
  );
};

export default App;

// <></> -> React.Fragment -> Fragment
