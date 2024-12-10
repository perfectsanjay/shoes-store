import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51Q0mB5LjWepqJ5T3VejIuLdhb362wsSVLgNxNNcNyW9qV7AogAVHSzWvHv57oaeAG0xcyMmdmIYmRBCjJavMtKch00PoFnZlv8'

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return(
        <StripeCheckout
         label="Pay Now"
         name="shoes-store"
         billingAddress
         shippingAddress
         image="public/White and Black Simple Shoes Store Logo.png"
         description={`Your total is ₹${price}`}
         amount={priceForStripe}
         panelLabel="PAY NOW"
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;