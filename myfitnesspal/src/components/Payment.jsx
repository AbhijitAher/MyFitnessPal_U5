import "./Payment.css";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
   let navigate = useNavigate() 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successfull, Welcome to MyFitnessPal Family !!");
    navigate("/")
  };
  return (
    <div id="payment_div_main">
      <div id="payment_div_main_sec1">
        <div id="payment_div_main_sec1_1">
          <h2>Input your payment information</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="big_input_box"
              placeholder="Cardholder's Name"
              required
            />
            <input
              type="number"
              className="big_input_box"
              placeholder="Card Number"
              required
            />
            <div>
              <input
                type="text"
                className="small_input_box"
                placeholder="MM/YY"
              />
              <input
                type="number"
                className="small_input_box"
                placeholder="CVV"
              />
              <input
                type="number"
                className="small_input_box"
                placeholder="Zip Code"
              />
            </div>
            <input
              type="submit"
              className="payment_Submit_btn"
              value="Place Order"
            />
          </form>
          <div className="TermsAndConditions_div">
            <p>
              By continuing, I confirm that I have read and agreed to the
              specific terms and conditions applicable to{" "}
              <a href=""> Paid Services</a> set out in the Terms and Conditions
              of Use.
            </p>

            <p>
              Subscribers agree to the auto-renewal provisions applicable to
              Premium Services. We do not offer refunds or exchanges. Read the
              applicable <a href="">terms and conditions</a>.
            </p>
            <p>
              If you experience any problems, please contact{" "}
              <a href="">customer support</a>.
            </p>
          </div>
        </div>
      </div>
      <div id="payment_div_main_sec2">
        <div id="payment_div_main_sec2_1">
          <h2>Order Summary</h2>
          <div>
            <p>MyFitnessPal Premium (Annual)</p>
            <p>₹3,100.00</p>
          </div>
          <p id="promocode_applied">Promo Code Applied</p>
          <div id="due_div">
            <p>DUE TODAY</p>
            <p>₹0.00</p>
          </div>
          <div id="renew_div">
            <p>
              Your subscription will renew at ₹3,100.00 per year on 23 February
              2022. You may cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
