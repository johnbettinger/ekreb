import { ChakraProvider } from '@chakra-ui/react';
import React, {useRef,useState,useEffect} from 'react';
import axios from 'axios';
import {
    Image,
    Box,
    Text,
    Button
} from '@chakra-ui/react';

import Home from './pages/home';

import GetWords from './components/GetWords';

export default function app() {

    

    //getScrambledWord();

    return (<ChakraProvider>

       
        {/* <Button onClick={getScrambledWord}>

            getword


        </Button>

        <Text>
            {scramWord}
        </Text>

       <Home/> */}

       <GetWords/>

        

    </ChakraProvider>);

    



}