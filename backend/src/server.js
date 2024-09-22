const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

app.get('/', (req, res) => {
    res.send('Welcome to the OpenÉcole API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
