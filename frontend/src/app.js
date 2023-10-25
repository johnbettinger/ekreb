import { ChakraProvider } from '@chakra-ui/react';
import React, {useRef,useState} from 'react';
import axios from 'axios';
import {
    Image,
    Box,
    Text,
    Button
} from '@chakra-ui/react';

import Home from './pages/home';




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

    //getScrambledWord();

    return (<ChakraProvider>
{/* 
       
        <Button onClick={getScrambledWord}>

            getword


        </Button>

        <Text>
            {scramWord}
        </Text> */}

       <Home/>

        
       


    </ChakraProvider>);



}