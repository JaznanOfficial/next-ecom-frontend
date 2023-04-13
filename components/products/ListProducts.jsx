"use client";

import React from "react";
import CustomPagination from "../layouts/CustomPagination";
import Filters from "../layouts/Filters";

import ProductItem from "./ProductItem";

const ListProducts = ({ data }) => {
    // console.log(data.length);
    return (
        <section className="py-12">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row -mx-4">
                    <Filters />

                    <main className="md:w-2/3 lg:w-3/4 px-3">
                        {data
                            ? data?.map((product) => (
                                  <ProductItem key={product._id} product={product} />
                              ))
                            : "No items found"}

                        <CustomPagination resPerPage={2} productsCount={data?.length} />
                    </main>
                </div>
            </div>
        </section>
    );
};

export default ListProducts;
