import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IeH7JKouRuMniHZBLHOuYIvSkutDiUcB6f7p7lMiRERa8HOrI3EFoLcyf6FY9nzjzPvFcrF11LzuOjWeHPO8nI500qI4UU7mZ');
const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
                
            </Elements>
        </div>
    );
};

export default ProcessPayment;