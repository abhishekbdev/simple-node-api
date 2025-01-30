const express = require('express');
const app = express();

const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky"
];

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she should embrace her mistakes. She gave me a hug."
];

const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" }
];

app.get('/random', (req, res) => {
    const randomType = ["quote", "joke", "user"][Math.floor(Math.random() * 3)];
    let data;

    if (randomType === "quote") {
        data = { type: "quote", content: quotes[Math.floor(Math.random() * quotes.length)] };
    } else if (randomType === "joke") {
        data = { type: "joke", content: jokes[Math.floor(Math.random() * jokes.length)] };
    } else {
        data = { type: "user", content: users[Math.floor(Math.random() * users.length)] };
    }

    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
