const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const nextConfig = {
	poweredByHeader: false,
	env: {
		CLIENT_PORT: process.env.CLIENT_PORT || 3000,
		SERVER_PORT: process.env.SERVER_PORT || 5000
	},
	images: {
		domains: ['localhost']
	}
}

module.exports = nextConfig
