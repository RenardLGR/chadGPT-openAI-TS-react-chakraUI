import React, { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import { Container } from '@chakra-ui/layout'
import Message from './Message'

type Props = {
    history: [string, string][]
}

const ChatBox: FC<Props> = ({ history }) => {

    //autoscroll down
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, [history]);

    return (
        <Container maxWidth="fit-content" overflow={'auto'} height={'75vh'} ref={containerRef}>
            {history.map((item: [string, string], idx: number) => {
                return (
                    idx !== 0 ? <Message key={idx} message={item} /> : null
                )
            })}
        </Container>
    )
}

export default ChatBox