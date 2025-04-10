import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

export default function ContactUs() {
  const faqs = [
    {
      id: 1,
      question: "What is Break Bites?",
      answer:
        "Break Bites is a food delivery app that connects users with local restaurants, offering a seamless ordering experience for delicious meals.",
      open: false,
    },
    {
      id: 2,
      question: "How can I place an order?",
      answer:
        "Simply download the Break Bites app, browse the menu, select your favorite dishes, and place an order for delivery or pickup.",
      open: false,
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, UPI, and digital wallets for a smooth and secure checkout experience.",
      open: false,
    },
    {
      id: 4,
      question: "Can I track my order?",
      answer:
        "Yes! Once your order is placed, you can track it in real-time from the restaurant to your doorstep.",
      open: false,
    },
    {
      id: 5,
      question: "How do I contact customer support?",
      answer:
        "You can reach us via email at support@breakbites.com or call us at 123-456-7890 for any assistance.",
      open: false,
    },
    {
      id: 6,
      question: "Does Break Bites offer discounts or promotions?",
      answer:
        "Yes! We frequently run special discounts and promotional offers. Keep an eye on our app and social media for the latest deals.",
      open: false,
    },
  ];

  const [faq, setFaq] = useState(faqs);

  const [selId, setSelId] = useState(null);

  function handleButtonFaq(idx) {
    if (idx === selId) {
      setSelId(null);
    } else setSelId(idx);
  }

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [submit, setSubmit] = useState(false);

  function handleSubmit() {
    if (
      formInput.name == "" ||
      formInput.email == "" ||
      formInput.number == ""
    ) {
      alert("Please enter all details");
    } else {
      handleLoader();
      setSubmit(true);
    }
  }

  const [loading, setLoading] = useState(false);

  function handleLoader() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  function onChange(e) {
    setFormInput({ ...formInput, [e.target.name]: [e.target.value] });
  }

  return (
    <div>
      <div className="contact_us_info">
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        <p>
          <h3>Have questions or need support? Reach out to us!</h3>
        </p>
        <div>
          <p>
            <strong>Email:</strong> support@breakbites.com
          </p>
          <p>
            <strong>Phone:</strong> 123-456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Foodie Street, Culinary City, KA 45678
          </p>
        </div>
        <hr></hr>

        {submit ? (
          loading ? (
            <div className="loader-overlay">
              <ClipLoader color="#123abc" loading={true} size={50} />
            </div>
          ) : (
            <h3>Awesome! We will contact you soon.</h3>
          )
        ) : (
          <div className="contact_us_form">
            <p>
              <h3>Fill here so that we can contact you!</h3>
            </p>

            <p>
              <input
                className="contact_input"
                placeholder="Name"
                name="name"
                type="text"
                onChange={(e) => onChange(e)}
              ></input>
              <br></br>

              <input
                className="contact_input"
                placeholder="Email"
                name="email"
                type="email"
                onChange={(e) => onChange(e)}
              ></input>
              <br></br>

              <input
                className="contact_input"
                placeholder="Phone number"
                name="number"
                type="number"
                onChange={(e) => onChange(e)}
              ></input>
              <br></br>
            </p>

            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}

        <hr></hr>

        <div className="contact_us_faq">
          <p>
            {" "}
            <h3>Check out some frequently asked questions...</h3>
          </p>

          <p>
            <div className="faq_comp">
              {faq.map((i) => {
                return (
                  <div key={i.id}>
                    <div className="q">
                      <b> {i.question}</b>
                      <span
                        className="downArrowFaqComp"
                        onClick={() => handleButtonFaq(i.id)}
                      >
                        <FaArrowCircleDown />
                      </span>
                    </div>

                    {i.id === selId && (
                      <div className="a">
                        {i.answer}
                        <br></br>
                      </div>
                    )}

                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
