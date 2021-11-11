import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
	font-weight: bold;
	front-size 18px;
	display: inline-flex;
	align-items: center;
	height: 50px;
	line-height: 40px;
	padding: 10px;

	&:hover img {
		animation: pulse 1s infinite;
 		animation-timing-function: linear;
	}

	@keyframes pulse {
		0% {transform: scale(1);}
		50% {transform: scale(0.9);}
		100% {transform: scale(1);}
	}
`
const Logo = () => {
	const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={logoImg} width={40} height={40} alt='logo'/>
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily='Open Sans", sans-serif'
						fontWeight='bold'
						ml={3}
					>
						Former
					</Text>
				</LogoBox>
			</a>
		</Link>
	)
}

export default Logo