const quotes = [
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Believe you can and you're halfway there.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "You miss 100% of the shots you don't take.",
  "I have no special talent. I am only passionately curious.",
  "The best way to predict the future is to invent it.",
  "Don't watch the clock; do what it does. Keep going.",
  "You can't go back and change the beginning, but you can start where you are and change the ending.",
  "The only person you are destined to become is the person you decide to be.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "Change your thoughts and you change your world.",
  "Success is stumbling from failure to failure with no loss of enthusiasm.",
  "Life is a journey, and if you fall in love with the journey, you will be in love forever.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The best revenge is massive success.",
  "It does not matter how slowly you go as long as you do not stop.",
  "You must be the change you wish to see in the world.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Happiness is not something ready made. It comes from your own actions.",
  "The only true wisdom is in knowing you know nothing.",
  "You can't build a reputation on what you are going to do.",
  "The two most important days in your life are the day you are born and the day you find out why.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "You are never too old to set another goal or to dream a new dream.",
  "The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
  "It does not matter how small you are if you have faith and a plan of action.",
  "The man who has confidence in himself gains the confidence of others.",
  "The journey of a thousand miles begins with one step.",
  "Believe in your dreams and they may come true; believe in yourself and they will come true.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "You have to learn the rules of the game. And then you have to play better than anyone else.",
  "If you want something you never had, you have to do something you've never done.",
  "I attribute my success to this: I never gave or took any excuse.",
  "We become what we think about most of the time, and that's the strangest secret.",
];

const quoteBox = document.querySelector("#quote");
const generateBtn = document.querySelector("#generate-btn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteBox.textContent = `"${randomQuote}"`;
}

generateBtn.addEventListener("click", generateQuote);

