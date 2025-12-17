import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      try {
        const stripePromise = await loadStripe(
          process.env.REACT_APP_STRIPE_PUBLIC_KEY
        );
        
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: productCartItem,
              userId: user._id, // Optional: userId যোগ করতে পারেন
            }),
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const session = await res.json();
        
        if (session.error) {
          toast.error(session.error);
          return;
        }

        toast.success("Redirecting to payment Gateway...!");
        
        const result = await stripePromise.redirectToCheckout({ 
          sessionId: session.id 
        });

        if (result.error) {
          toast.error(result.error.message);
        }
      } catch (error) {
        console.error("Payment error:", error);
        toast.error("Payment failed. Please try again.");
      }
    } else {
      toast.error("You have not logged in!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      {productCartItem.length > 0 ? (
        <div className="my-4 flex flex-col lg:flex-row gap-3">
          {/* display cart items */}
          <div className="w-full lg:max-w-3xl">
            {productCartItem.map((el) => (
              <CartProduct
                key={el._id}
                id={el._id}
                name={el.name}
                image={el.image}
                category={el.category}
                qty={el.qty}
                total={el.total}
                price={el.price}
              />
            ))}
          </div>

          {/* total cart item */}
          <div className="w-full lg:max-w-md ml-auto">
            <div className="sticky top-4">
              <h2 className="bg-blue-500 text-white p-2 text-lg rounded-t-lg">
                Summary
              </h2>
              <div className="bg-white p-4 rounded-b-lg shadow-md">
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Qty :</p>
                  <p className="ml-auto w-32 font-bold">{totalQty}</p>
                </div>
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Price</p>
                  <p className="ml-auto w-32 font-bold">
                    <span className="text-red-500">₹</span> {totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 w-full text-lg font-bold py-2 text-white mt-4 rounded transition duration-300"
                  onClick={handlePayment}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center flex-col mt-8">
          <img 
            src={emptyCartImage} 
            className="w-full max-w-sm" 
            alt="Empty Cart" 
          />
          <p className="text-slate-500 text-3xl font-bold mt-4">Empty Cart</p>
          <button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;