import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Checkout = () => {
  const { user } = useAuth();

  if (!user) {
    return <p className="cart-empty">You need to log in to place an order.</p>;
  }

  return (
    <div className="checkout-page">
      <p className="section-kicker">Checkout</p>
      <h1>Proceed with your order</h1>
      <p>
        Checkout-flödet är kopplat till orderresan och är redo att byggas ut med betalning,
        leveransval och orderbekräftelse.
      </p>
    </div>
  );
};

export default Checkout;
