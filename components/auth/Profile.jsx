"use client";

import React, { useContext } from "react";
import UserAddresses from "../user/UserAddresses";
import Link from "next/link";
// import AuthContext from "@/context/AuthContext";

const Profile = ({ addresses }) => {
    // const { user } = useContext(AuthContext);

    return (
        <>
            <figure className="flex items-start sm:items-center">
                <div className="relative">
                    <img
                        className="w-16 h-16 rounded-full mr-4"
                        src={"/images/default.png"}
                        alt={"user"}
                    />
                </div>
                <figcaption>
                    <h5 className="font-semibold text-lg">{"name"}</h5>
                    <p>
                        <b>Email:</b> {"email@email.com"} | <b>Joined On:</b>
                        {10 - 5 - 2023}
                    </p>
                </figcaption>
            </figure>

            <hr className="my-4" />

            <UserAddresses addresses={addresses} />

            <Link href="/address/new">
                <button className="px-4 py-2 inline-block text-green-600 border border-gray-300 rounded-md hover:bg-gray-100">
                    <i className="mr-1 fa fa-plus"></i> Add new address
                </button>
            </Link>

            <hr className="my-4" />
        </>
    );
};

export default Profile;
