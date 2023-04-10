import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import React from "react";

const getProductDetails = async (id) => {
    const { data } = await axios.get(`${process.env.API_URL}/products?_id=${id}`);
    return data;
};

const ProductDetailsPage = async ({ params }) => {
    const product = await getProductDetails(params._id);
    // console.log(product);

    return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
