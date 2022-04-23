const quotes = [
    {
        quote: "\"Frankly, my dear, I don't give a damn.\"",
        movie: "Gone with the Wind(1939)",
    },
    {
        quote: "\"Here's looking at you, kid.\"",
        movie: "Casablanca(1942)",
    },
    {
        quote: "\"May the Force be with you.\"",
        movie: "Star Wars(1977)",
    },
    {
        quote: "\"I'll be back.\"",
        movie: "The Terminator(1984)",
    },
    {
        quote: "\"I see dead people.\"",
        movie: "The Sixth Sense(1999)",
    },
    {
        quote: "\"Keep your friends close, but your enemies closer.\"",
        movie: "The Godfather part 2(1939)",
    },
    {
        quote: "\"Here's Johnny!\"",
        movie: "The Shining(1980)",
    },
    {
        quote: "\"My precious.\"",
        movie: "The Lord of the Rings: The Two Towers(2002)",
    },
    {
        quote: "\"A martini. Shaken, not stirred.\"",
        movie: "Goldfinger(1964)",
    },
    {
        quote: "\"I'm the king of the world!\"",
        movie: "Titanic(1997)",
    },
];

const quote = document.querySelector("#quote span:first-child")
const movie = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//Math.random()은 0부터 1미만의 숫자를 랜덤으로 돌려줌
//Math.floor()는 버림, Math.ceil()은 올림, Math.round()는 반올림

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;