import Header from "@/components/layouts/Header";
import "./globals.css";
// import { GlobalProvider } from "./GlobalProvider";

export const metadata = {
    title: "NextShop",
    description: "The Largest e-commerce shop",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    precedence="default"
                />
            </head>
            <body>
                {/* <GlobalProvider> */}
                <Header />
                {children}
                {/* </GlobalProvider> */}
            </body>
        </html>
    );
}
