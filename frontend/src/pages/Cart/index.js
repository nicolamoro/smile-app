import React, { useMemo } from "react";
import CartItem from "../../components/CartItem";
import { useCartSelector } from "../../store/selectors/cart";

const Cart = () => {
  const cartData = useCartSelector();

  const total = useMemo(() => {
    return cartData.reduce(
      (acc, item) => acc + item.quantity * item.product.discountPrice,
      0
    );
  }, [cartData]);

  return (
    <div>
      {cartData.length > 0 ? (
        <div>
          <div className="fs-4 fw-bolder text-center">Il tuo carrello</div>
          <div className="fs-6 fw-bolder text-end me-4">
            Totale: {total.toFixed(2)}&euro;
          </div>
          {cartData.map((item, index) => (
            <CartItem key={`cart-item-${index}`} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-3 fs-5 fst-italic text-center">
          Il carrello è vuoto!
        </div>
      )}
    </div>
  );
};

export default Cart;
