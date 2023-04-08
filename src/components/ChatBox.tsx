import React from 'react'
import { useState } from 'react'
import { Container } from '@chakra-ui/layout'
import Message from './Message'

const ChatBox = ({history}) => {


  return (
    <Container maxWidth="fit-content" overflow={'auto'} height={'75vh'}>
        {history.map((item, idx) => {
            return (
            <Message key={idx} message={item}/>
            )
    })}
    </Container>
  )
}

export default ChatBox