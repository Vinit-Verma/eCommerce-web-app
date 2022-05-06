import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import CartBadgeState from "./context/cart_badge/CartBadgeState";

function App() {
  return (
    <>
      <CartBadgeState>
        <Header />
        <Main />
        <Footer />
      </CartBadgeState>
    </>
  );
}

export default App;
