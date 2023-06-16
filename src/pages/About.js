import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce APP"}>
      <div className="row contactus ">
        <div className="col-md-6 " style={{ marginTop: "100px" }}>
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "95%" }}
          />
        </div>
        <div className="col-md-4">
          {/* <ol> */}
          <p className="text-justify" style={{ marginTop: "100px" }}>
            Welcome to our ecommerce website, where shopping for your favorite
            items has never been easier! Our platform offers a seamless and
            user-friendly experience, allowing you to browse through a vast
            selection of products from the comfort of your own home. Whether
            you're looking for fashion essentials, electronics, home decor, or
            any other category, we've got you covered. With our intuitive search
            functionality, finding exactly what you need is a breeze. Each
            product listing is accompanied by detailed descriptions,
            high-quality images, and customer reviews, empowering you to make
            informed purchasing decisions. Adding items to your cart is as
            simple as a click of a button, and our secure checkout process
            ensures the safety of your personal information. We also offer
            various payment options, allowing you to pay with your preferred
            method. Our dedicated customer support team is always ready to
            assist you with any inquiries or concerns you may have. So why wait?
            Start exploring our ecommerce website today and embark on a
            delightful shopping journey.
          </p>
          {/* </ol> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
