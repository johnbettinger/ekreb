import { ChakraProvider } from '@chakra-ui/react';
import React, {useRef,useState} from 'react';
import axios from 'axios';
import {
    Image,
    Box,
    Text
} from '@chakra-ui/react';




export default function app() {

    const [scramWord, setScramWord] = useState('');
    

    const getScrambledWord = async () => {

        axios.get('/word/getWord').then(response => {
            const data = response.json();
            setScramWord(data.scrambled);
            console.log(data.scrambled);
            
        }).catch(error => {
            console.error('Error!',error);
        });
    
    
    };



    return (<ChakraProvider>

       <Text>
            play ekreb
       </Text>



    </ChakraProvider>);



}