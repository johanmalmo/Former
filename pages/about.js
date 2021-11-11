import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {TupleSection, TuplePrefix} from '../components/tuple'

const About = () => {
    return (
        <Layout>
            <Container maxW = 'container.xl'>
                <Box 
                    bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p = {3}
                    mb = {6}
                    mt = {20}
                >
                    <Section delay = {0.2}>
                        <Heading as = 'h3' ml = {5} variant = 'section-title'>
                            Packages
                        </Heading>
                        <TupleSection>
                            <TuplePrefix>-</TuplePrefix>
                            Node.js
                        </TupleSection>
                        <TupleSection>
                            <TuplePrefix>-</TuplePrefix>
                            React.js
                        </TupleSection>
                        <TupleSection>
                            <TuplePrefix>-</TuplePrefix>
                            Next.js
                        </TupleSection>
                        <TupleSection>
                            <TuplePrefix>-</TuplePrefix>
                            Chakra-ui
                        </TupleSection>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default About
