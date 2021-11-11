import {
    Grid,
    Heading,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import * as Form from '../components/form'

const Create = () => {
    return (
        <Layout>
            <Heading
                as = 'h1'
                fontSize = {32}
                mb = {4}
                variant = 'page-title'
                color = {useColorModeValue('gray.500', 'whiteAlpha.800')}
            >
                Create a form
            </Heading>
            <Grid
                gridTemplateColumns = {{
                    base: '1fr',
                    md: '2fr 3fr 1fr'
                }}
                gridTemplateAreas = {{
                    base: `'components' 'preview' 'details'`,
                    md: `'components preview details'`
                }}
            >
                <Section>
                    <Box gridArea = 'components' border = '1px' borderColor = 'gray.500' h = '100%'>
                        <Form.TextBox></Form.TextBox>
                    </Box>
                </Section>
                <Section>
                    <Box gridArea = 'preview' border = '1px' borderColor = 'green.500' h = '100%'>
                        Preview
                    </Box>
                </Section>
                <Section>
                    <Box gridArea = 'details' border = '1px' borderColor = 'red.500' h = '100%'>
                        Details
                    </Box>
                </Section>
            </Grid>
        </Layout>
    )
}

export default Create