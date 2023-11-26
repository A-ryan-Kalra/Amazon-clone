/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
      },
    ],
  },
  env: {
    //RazorPay keys
    RAZORPAY_KEY: process.env.RAZORPAY_KEY,
    RAZORPAY_SECRET: process.env.RAZORPAY_SECRET,
  },
};
