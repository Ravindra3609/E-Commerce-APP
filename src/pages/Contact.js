import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "95%" }}
          />
        </div>
        <div className="col-md-4">
          <h1
            className="bg-dark p-4 text-white text-center"
            style={{ marginTop: "100px" }}
          >
            CONTACT US
          </h1>
          <p className="text-justify">
            {" "}
            Any query and info about prodducts feel free to call anytime we are
            24X7 available !
          </p>
          <p className="mt-3">
            <b>
              <BiMailSend /> : ecommercehelp@gmail.com
            </b>
          </p>
          <b className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </b>
          <p className="mt-3">
            <BiSupport /> : <b>1000-0000-0000 (Toll free)</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
