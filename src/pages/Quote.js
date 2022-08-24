import React from 'react';
import './Quote.css';

const quotes = [
  {
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    quote: 'I have had my results for a long time: but I do not yet know how I am to arrive at them.',
    author: 'Carl Friedrich Gauss',
  },
  {
    quote: 'Mathematics is the queen of science, and arithmetic the queen of mathematics.',
    author: 'Carl Friedrich Gauss',
  },
  {
    quote: 'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
    author: 'John von Neumann',
  },
  {
    quote: 'I have hardly ever known a mathematician who was capable of reasoning.',
    author: 'Plato',
  },
  {
    quote: 'A mathematician is a device for turning coffee into theorems.',
    author: 'Paul Erdos',
  },
  {
    quote: 'The numbers may be said to rule the whole world of quantity, and the four rules of arithmetic may be regarded as the complete equipment of the mathematician.',
    author: 'James C. Maxwell',
  },
  {
    quote: 'In mathematics the art of proposing a question must be held of higher value than solving it.',
    author: 'Georg Cantor',
  },
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, quotes.length - 1);

const QuotePage = () => (
  <div className="quote-page">
    <h2>Random quote from famous mathematicians</h2>
    <h3>
      &ldquo;
      {quotes[rndInt].quote}
      &ldquo;
    </h3>
    <p>
      <span>{quotes[0].author}</span>
    </p>
  </div>
);

export default QuotePage;
