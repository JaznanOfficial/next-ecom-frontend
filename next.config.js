/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    env: {
        API_URL: "https://next-ecom-server.cyclic.app/api/v1",
        DB_URI: "mongodb+srv://next-shop:XFIyT3HuU2XR9PRt@next-blog.jg4cbvm.mongodb.net/?retryWrites=true&w=majority",

        CLOUD_NAME: "buyitnow",
        CLOUDINARY_API_KEY: "",
        CLOUDINARY_API_SECRET: "",

        NEXTAUTH_SECRET: "JaznanOfficial",
    },
    images: {
        domains: ["res.cloudinary.com", "img.freepik.com"],
    },
};

module.exports = nextConfig;
