const express = require('express');
const router = express.Router();


const axios = require('axios');

const RANDOM_WORD_API = 'https://random-word-api.herokuapp.com/word';


// scramble word
function wordScramble(randomWord) {
    
    let chars = randomWord.split("");

    for (let i = 0; i < chars.length(); ++i) {
        chars[i] = chars[Math.floor(Math.random * i)];
    }

    let finalWord = chars.join("");
    return finalWord;
}

// api route
const options = {
    method: 'GET',
    url: RANDOM_WORD_API,
};

// getting random word
async function getRandomWord() {
    try {
        const response = await axios.request(options);
        const randomWord = response.data[0];
        console.log(randomWord);
        return randomWord;
    } catch(error) {
        console.error(error);
    }

    
}

// api get call to return scrambled word
router.get('/getWord',(req,res)=>{
    
    const randomWord = getRandomWord();
    const scrambled = wordScramble(randomWord);
    res.json(randomWord,scrambled);

});

module.exports = router;

