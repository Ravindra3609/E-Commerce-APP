import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy-Policy"}>
      <div className="row contactus ">
        <div className="col-md-5 " style={{ marginTop: "100px" }}>
          <img
            src="/images/privacypolicy.jpg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-5" style={{ marginTop: "100px" }}>
          <ol type="1">
            <b>
              <li>
                We respect your privacy and safeguard your personal information
                on our ecommerce website.
              </li>
              <li>
                We collect and use your personal information only for the
                purpose of fulfilling your orders and providing you with a
                seamless shopping experience.
              </li>
              <li>
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, disclosure, or
                alteration.
              </li>
              <li>
                We may share your personal information with trusted third-party
                service providers who assist us in delivering our products and
                services to you.
              </li>
              <li>
                We may use cookies and similar technologies to enhance your
                browsing experience and gather statistical information about our
                website traffic.
              </li>
              <li>
                We do not sell, rent, or trade your personal information to
                third parties for their marketing purposes.
              </li>
              <li>
                You have the right to access, update, or delete your personal
                information from our records, subject to applicable laws and
                regulations.
              </li>
            </b>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
