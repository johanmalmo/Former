import {Provider} from 'next-auth/client'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import {AnimatePresence} from 'framer-motion'

const Website = ({Component, pageProps, router}) => {
	return (
		<Provider
			options = {{
				clientMaxAge: 0,
				keepAlive: 0,
			}}
			session = {pageProps.session}
		>
			<ChakraProvider theme = {theme}>
				<Fonts/>
				<Layout router = {router}>
					<AnimatePresence exitBeforeEnter initial = {true}>
						<Component {...pageProps} key = {router.route}/>
					</AnimatePresence>
				</Layout>
			</ChakraProvider>
		</Provider>
	)
}

export default Website