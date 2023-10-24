const express = require('express');
const app = express();
const cors = require('cors');
const wordRoutes = require('./routes/words');


app.use(cors());
app.use(express.json());

app.use('/words', wordRoutes);

app.listen(4000,()=>{
    console.log('listening on port 4000...');
});

