import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

export default NextAuth({
	jwt: {
		signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
	},
	database: process.env.DATABASE_URL
})
