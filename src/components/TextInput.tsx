import React, { FC } from 'react'
import { useState } from 'react'
import { Container, Textarea, Button, useToast } from '@chakra-ui/react'

type Props = {
    sendChat: (text: string) => void;
  };

const TextInput:FC<Props> = ({ sendChat }) => {

    const [text, setText] = useState<string>('')

    //Chackra hook that allows us to raise an alert if the textarea is empty when we submit
    const toast = useToast()

    const submitText = () => {
        if(text === ''){
            toast({
                title: 'Text field is empty',
                description: 'Please enter some text to uwu',
                status: 'error',
                duration: 3000,
                isClosable: false
            })
        }else{
            sendChat(text)
            setText('')
        }
    }

    return (
        <Container maxWidth={'3xl'}>
            <Textarea
                bg='red.700'
                fontSize={'xl'}
                color='blue.300'
                padding={4}
                marginTop={6}
                height={200}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                bg='blackAlpha.900'
                color='red.400'
                marginTop={4}
                width='100%'
                _hover={{ bg: 'red.600', color:'blackAlpha.900'}}
                onClick={submitText}
            >✍(◔◡◔)</Button>
        </Container>
    )
}

export default TextInput