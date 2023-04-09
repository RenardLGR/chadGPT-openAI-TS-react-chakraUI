import React, { FC } from 'react'
import { Box, Container, Text } from '@chakra-ui/layout'

type Props = {
    message: [string, string]
}

const Message:FC<Props> = ({message}) => {
    let author:string = message[0]
    let content:string = message[1]
    let isUser = author==='user'
    return (
        <>
        <Box>
            <Container 
            fontSize={'lg'}
            marginTop={10} 
            color={isUser ? 'blue.300' : 'white'} 
            backgroundColor={'red.700'} 
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