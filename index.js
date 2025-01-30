const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! This is a simple API.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
