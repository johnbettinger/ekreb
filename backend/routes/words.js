
const express = require('express');
const router = express.Router();


// scramble word
function wordScramble(randomWord) {




}


// api get call to return scrambled word
router.get('/getWord',(req,res)=>{
    //const randomWord = // api call
    const scrambled = wordScramble(randomWord);
    res.json(randomWord,scrambled);
});

module.exports = router;