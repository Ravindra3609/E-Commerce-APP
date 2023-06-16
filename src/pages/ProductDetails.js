import Layout from "antd/es/layout/layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //initial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get products
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar products

  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {/* <h1>Product Details</h1>
      {JSON.stringify(product, null, 4)}     This is for details in the form of json data about that particular data */}

      <div className="row container mt-4">
        <div className="col-md-3 ">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 ">
          <h2
            className="text-center "
            style={{ color: "green", textDecoration: "underline" }}
          >
            Product Details
          </h2>

          <h5>Product Name : {product.name}</h5>
          <h5>Description : {product.description}</h5>
          <h5>Price : {product.price}</h5>
          <h5>Category : {product?.category?.name}</h5>
          <button class="btn btn-secondary ms-3">Add to cart</button>
        </div>
      </div>
      <hr />

      <div className="row">
        <h4
          className="text-center"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Similar Products
        </h4>

        {relatedProducts.length < 1 && (
          <h2 className="text-center">No similar products found</h2>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 40)}...</p>
                <p className="card-text">₹ {p.price}</p>

                <button class="btn btn-secondary ms-3">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
