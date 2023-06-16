import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard - All users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3" style={{ marginTop: "60px" }}>
            <AdminMenu />
          </div>
          <div className="col-md-9" style={{ marginTop: "50px" }}>
            <h1 className="text-center">All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
