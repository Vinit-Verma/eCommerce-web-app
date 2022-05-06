import CartBadgeContext from "./cart_badge_context";
import { useState } from "react";

const CartBadgeState = (props) => {
  const [cartBadgeSignal, setCartBadgeSignal] = useState(true);

  const setTrue = () => {
    setCartBadgeSignal(true);
  };

  const setFalse = () => {
    setCartBadgeSignal(false);
  };

  return (
    <CartBadgeContext.Provider value={{ cartBadgeSignal, setTrue, setFalse }}>
      {props.children}
    </CartBadgeContext.Provider>
  );
};

export default CartBadgeState;
