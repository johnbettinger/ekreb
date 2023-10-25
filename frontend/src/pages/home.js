import { ChakraProvider } from '@chakra-ui/react';
import React, {useRef,useState} from 'react';
import {
    Image,
    Box,
    Text,
    Button
} from '@chakra-ui/react';

import Start from './start';

export default function Home() {
   
    return (<ChakraProvider>

        <Box>
            <button _hover={{ bg: "green.200" }} colorScheme='teal' onClick={Start}>
                Play Ekreb
            </button>

            <Text>
                How To Play:

            </Text>


        </Box>

        


        </ChakraProvider>);

   
}
