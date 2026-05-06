import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';


import successImg from '../../assets/success.png';
import failedImg from '../../assets/failed.png';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState(""); // success | failed
  const [message, setMessage] = useState("");

  const totalAmount =
    getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2;

  const handlePayment = (e) => {
    e.preventDefault();

    const paidAmount = Number(amount);

    if (paidAmount < totalAmount) {
      setStatus("failed");
      setMessage("Insufficient balance. Please check your account or try again.");
    } 
    else if (paidAmount === totalAmount) {
      setStatus("success");
      setMessage("Your payment was successful.");
    } 
    else {
      setStatus("success");
      setMessage(
        "Payment successful! Change returned: ₹" +
          (paidAmount - totalAmount)
      );
    }
  };

  return (
    <form className='place-order'>

      {/* LEFT SIDE */}
      <div className="place-order-left">

        <p className='title'>Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Street' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>

        <div>
          <input type="text" placeholder='Phone' />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="place-order-right">

        <div className="cart-bottom">
          <div className="cart-total">

            <h2>Cart Totals</h2>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <div className="cart-total-details">
              <b>Total</b>
              <p>{totalAmount}</p>
            </div>

            {/* PAYMENT INPUT */}
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button onClick={handlePayment}>
              PROCEED TO PAYMENT
            </button>

          {status && (
  <div className="payment-overlay">
    <div className="payment-box">

      <img
        src={status === "success" ? successImg : failedImg}
        alt="payment status"
        className={`payment-image ${status}`}
      />

      <h2>
        {status === "success"
          ? "Your payment was successful"
          : "Your payment failed"}
      </h2>

      <p>{message}</p>

      <button onClick={() => setStatus("")}>
        OK
      </button>

    </div>
  </div>
)}

          </div>
        </div>

      </div>

    </form>
  );
};

export default PlaceOrder;