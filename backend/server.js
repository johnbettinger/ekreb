const express = require('express');
const app = express;

const wordRoutes = require('./routes/words');

app.use('/words', wordRoutes);

app.listen(4000,()=>{
    console.log('listening on port 4000...');
});

