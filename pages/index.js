import {
	useSession,
	signIn,
	signOut
} from 'next-auth/client'
import {
    Container,
    SimpleGrid,
    Heading,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IndexGridItem} from '../components/grid-item'

const Index = () => {
	const session = useSession()

	return (
		<Layout>
			{!session && (
				<>
					Not signed in <br/>
					<button onClick={() => signIn()}>Sign in</button>
				</>
			)}
			{session && (
				<>
					Signed in as {session.user}<br/>
					<button onClick={() => signOut()}>Sign Out</button>
				</>
			)}
		</Layout>
	)
}

export default Index
