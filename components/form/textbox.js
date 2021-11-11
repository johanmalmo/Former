import {
	FormControl,
	FormLabel,
	Input,
	useColorModeValue
} from '@chakra-ui/react'

const TextBox = () => {
	return (
		<FormControl id = 'search' p = {2}>
			<FormLabel>Search</FormLabel>
			<Input type = 'search' borderRadius = {0} bg = {useColorModeValue('whiteAlpha.800', 'gray.600')}/>
		</FormControl>
	)
}

export default TextBox