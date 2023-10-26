import React, { useState, useEffect } from 'react';
import axios from 'axios';    





function GetWords() {    
    //const [scramWord, setScramWord] = useState('');
    //const [origWord, setOrigWord] = useState('');
    const [wordData, setWordData] = useState(null);


    useEffect(() => {
        axios.get('words/getWord')
          .then(response => {
            setWordData(response.data);
            // setScramWord(wordData.scrambled);
            // setOrigWord(wordData.original)

          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    
      return (
        <div>
          {wordData ? (
            <>
              {/* <p>Original Word: {wordData.original}</p> */}
              <p>Scrambled Word: {wordData.scrambled}</p>
            </>
          ) : (
            'Loading...'
          )}
        </div>
      );
    

//     const getScrambledWord = async () => {


//         useEffect(() => {
//             axios.get('/word/getWord')
//               .then(response => {
//                 setScramWord(response.data.scrambled);
//                 setOrigWord(response.data.original)
//                 console.log(response.data);
//               })
//               .catch(error => {
//                 console.error('Error:', error);
//               });
//           }, []);
    
    
//     };

//     return (
//         <div>
//           {origWord ? (
//             <>
//               <p>Original Word: {origWord}</p>
//             </>
//           ) : (
//             'Loading...'
//           )}
//         {scramWord ? (
//           <>
//             <p>Original Word: {scramWord}</p>
//           </>
//         ) : (
//           'Loading...'
//         )}
//       </div>
//       );


}

export default GetWords;