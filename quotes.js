const quotes = [
    { 
        quote: "단점 대신 장점을 보자",
        author: "(성품)",
    },
    {
        quote: "스스로를 완벽히 통제한다",
        author: "(정신력)",
    },
    {
        quote: "강인한 체력에 강인한 정신력이 깃든다",
        author: "(체력)",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotePick = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = quotePick.quote;
author.innerText = quotePick.author;
