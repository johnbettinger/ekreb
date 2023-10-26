// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// const RANDOM_WORD_API = 'https://random-word-api.herokuapp.com/word';


// // // scramble word
// // function wordScramble(randomWord) {
    
// //     let chars = randomWord.split('');

// //     for (let i = 0; i < chars.length; ++i) {
// //         chars[i] = chars[Math.floor(Math.random * i)];
// //     }

// //     let finalWord = chars.join("");
// //     return finalWord;
// // }

// // // api route
// // const options = {
// //     method: 'GET',
// //     url: RANDOM_WORD_API,
// // };

// // getting random word
// // async function getRandomWord() {
// //     try {
// //         const response = await axios.request(options);
// //         const randomWord = response.data[0];
// //         console.log(randomWord);
// //         return randomWord;
// //     } catch(error) {
// //         console.error(error);
// //     }

    
// // }

// async function getRandomWord() {
//     try {

//         const response = await fetch(RANDOM_WORD_API);
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       // Parse the JSON from the response
//       const words = await response.json();
  
//       const randomWord = words[0];
  
//       console.log(randomWord);
//       return randomWord;
  
//     } catch (error) {
//       console.error('Error fetching random word:', error);
//       return null;
//     }
//   }


// // api get call to return scrambled word
// router.get('/getWord',(req,res)=>{
    

//     getRandomWord().then(word => {
//         if (word) {
//           console.log('Random Word:', word);
//           res.json(word);
//         } else {
//           console.error('Could not fetch a random word.');
//         }
//       });

//     //const scrambled = wordScramble(randomWord);
//     //res.json(randomWord,scrambled);
    

// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const axios = require('axios');

const RANDOM_WORD_API = 'https://random-word-api.herokuapp.com/word';

// scramble word
function wordScramble(randomWord) {
    let chars = randomWord.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
        
    }
    let finalWord = chars.join("");
    return finalWord;
}

// getting random word
async function getRandomWord() {
    try {
        const response = await axios.get(RANDOM_WORD_API);
        const randomWord = response.data[0];
        console.log(randomWord);
        return randomWord;
    } catch(error) {
        console.error(error);
        return null;
    }
}

// api get call to return scrambled word
router.get('/getWord', async (req, res) => {
    try {
        const word = await getRandomWord();
        if (word) {
            console.log('Random Word:', word);
            const scrambled = wordScramble(word);
            res.json({ original: word, scrambled: scrambled });
        } else {
            res.status(500).send('Could not fetch a random word.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error.');
    }
});

module.exports = router;
