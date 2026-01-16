// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ["@prisma/client"],
//   experimental: {
//     turbo: {}
//   }
//   // reactStrictMode: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  // experimental: {
  //   serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  // },
};

export default nextConfig;