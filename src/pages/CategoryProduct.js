import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);

  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: "100px" }}>
        <h5 className="text-center">Category - {category?.name}</h5>
        <h5 className="text-center">{products?.length} result found</h5>
        <div className="row">
          <div className="col-md-9 ">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={p._id}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 40)}...
                    </p>
                    <p className="card-text">₹ {p.price}</p>

                    <button
                      class="btn btn-primary ms-3"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button class="btn btn-secondary ms-3">Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
            {/* <div>{total}</div> -> if you want to get total products count in that specific page use this !! */}

            {/* <div className="m-2 p-3">
                {products && products.length < total && (
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(page + 1);
                    }}
                  >
                    {loading ? "Loading ..." : "Loadmore"}
                  </button>
                )}
              </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
