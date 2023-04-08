import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Text, Flex, Container, CircularProgress } from '@chakra-ui/react'
import TextInput from './TextInput'
import ChatBox from './ChatBox'

const Chat = () => {
    const [history, setHistory] = useState<[string, string][]>([])
    const [loading, setLoading] = useState<boolean>(false) //if we are fetching the data

    const introPrompt = "For all of this conversation, be as cheerful and as expressive as possible. Replace every r with a w. Add some playful and happy kaomojis (like (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ or (づ｡◕‿‿◕｡)づ or (´｡• ᵕ •｡`) or any other of your liking) throughout tour answer. Start of conversation: \n"

    const sendChat = async (text:string) => {
        //No try catch block?!

        let oldHistory = history.slice()
        oldHistory.push(['user', text])
        setHistory(oldHistory)
        // console.log(oldHistory);

        setLoading(true) //we are fetching the data
        //   setisOpen(true) //the modal has the spinner so we want that open too

        // useState updates the state asynchronously. This means that console.log(history) right after setHistory may not yet reflect the updated state.

        const messages = oldHistory.map((message:[string, string], idx:number) => {
            // let res: { role: string; content: string } = {};
            // res.role = message[0];
            // res.content = message[1];
            
            let res: {role:string, content:string} = {
                role: message[0],
                content:message[1]
            }

            if (idx === 0) {
                res.content = introPrompt + res.content
            }

            return res
        })

        // console.log(messages);

        //Use this option if you want to use chat completions
        const optionsChatCompletions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messages,
            })
        }


        //Use this fetch if you want to use chat completions
        const response = await fetch(import.meta.env.VITE_OPEN_AI_CHAT_COMPLETIONS_URL, optionsChatCompletions)

        const json = await response.json()

        console.log(json);


        //Use this data if you want to use chat completions
        const data = json.choices[0].message.content.trim()

        // console.log(data);
        oldHistory.push(['assistant', data])
        setHistory(oldHistory)

        console.log(oldHistory);

        setLoading(false)
    }

    //Show alert when leaving
    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         event.preventDefault();
    //         //Can't set up own message since Chrome 51
    //         event.returnValue = "Awe you sure you want to leave o((>ω< ))o? Our conwesation will be fowever deleted .·´¯`(>▂<)´¯`·. ";

    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    return (
        <>
            <Box backgroundColor={'pink.300'} color='white' height='100vh' >
                <Container maxW={'70vw'}>
                    <ChatBox history={history} />
                    <Flex justifyContent={'center'}>
                        {loading ? 
                            <CircularProgress isIndeterminate color='pink.300' size={'30px'}/> : 
                            <></>}
                    </Flex>
                    <TextInput sendChat={sendChat} />
                </Container>
            </Box>
        </>
    )
}

export default Chat