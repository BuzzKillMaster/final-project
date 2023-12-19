/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakeimg.pl',
            },
            {
                protocol: 'https',
                hostname: 'assets.tina.io'
            },
            {
                protocol: 'https',
                hostname: 'borreby.vercel.app'
            },
            {
                protocol: 'http',
                hostname: 'localhost'
            }
        ],
    },
}

module.exports = nextConfig
