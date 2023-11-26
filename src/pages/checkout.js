import React, { useEffect, useState } from "react";

import { totalPrice } from "./cart";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Button({ amt, className, name }) {
  const router = useRouter();
  const makePayment = async (amt) => {
    //console.log("here...");

    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taxAmt: amt,
      }),
    }).then((t) => t.json());
    //console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Aryan Kalra",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You for purchasing",
      image:
        "https://yt3.googleusercontent.com/ytc/APkrFKZNufwHDZjGMb0SWNSMe-8W0VA2QRJtK3dctN8e0Q=s176-c-k-c0x00ffffff-no-rj",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert("Collect your payment id: " + response.razorpay_payment_id);
        //alert(response.razorpay_order_id);
        //alert(response.razorpay_signature);
        localStorage.clear();

        router.reload("/cart");
      },
      prefill: {
        name: "Aryan Kalra",
        email: "aryan.kalra@gmail.com",
        contact: "7011673524",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <button
      className={`${className}`}
      onClick={() => {
        {
          makePayment(amt);
        }
      }}
    >
      {name}
    </button>
  );
}

export default Button;
