import React from 'react'
import { Box, Container, Text } from '@chakra-ui/layout'

const Message = ({message}) => {
    let author = message[0]
    let content = message[1]
    let isUser = author==='user'
    return (
        <>
        <Box>
            <Container 
            marginTop={10} 
            color={isUser ? 'pink.300' : 'blue.300'} 
            backgroundColor={'pink.600'} 
            borderRadius={'8px'}
            paddingY={'5px'}
            maxWidth="fit-content"
            marginLeft={isUser ? 'auto' : '0'}
            marginRight={isUser ? '0' : 'auto'}
            >
                <Text>{content}</Text>
            </Container>
        </Box>
        </>
    )
}

export default Message