const messages = [
    "Hello!",
    "How are you?",
    "Good morning!",
    "Have a great day!",
    "What's up?",
    "Goodbye!",
    "Take care!",
    "See you later!",
    "Thank you!",
    "You're welcome!",
    "Nice to meet you!",
    "What's new?",
    "Stay safe!",
    "Happy Birthday!",
    "Congratulations!",
    "Good luck!",
    "Let's hang out!",
    "Cheers!",
    "Excuse me!",
    "Sorry!"
  ]


const returnMessage = (msg) =>
{
    const randomIndex = Math.floor(Math.random() * msg.length);
    return msg[randomIndex];
}

console.log(returnMessage(messages));

