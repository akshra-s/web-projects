const mongoose=require("mongoose");
const chat=require("./models/chat.js");
main()
    .then(() =>{
        console.log("connection successful");
    })
    .catch((err) =>{
        console.log(err);
    });
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatbox');
}

let data = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me the notes for the exam",
    dnt: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "teach me JS callbacks",
    dnt: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    msg: "all the best!",
    dnt: new Date(),
  },
  {
    from: "rahul",
    to: "ankit",
    msg: "are you coming to college tomorrow?",
    dnt: new Date(),
  },
  {
    from: "priya",
    to: "sakshi",
    msg: "let's complete the assignment together",
    dnt: new Date(),
  },
  {
    from: "aditya",
    to: "karan",
    msg: "did you solve today's DSA problem?",
    dnt: new Date(),
  },
  {
    from: "riya",
    to: "megha",
    msg: "happy birthday! 🎉",
    dnt: new Date(),
  },
  {
    from: "vishal",
    to: "aman",
    msg: "meet me at the library at 4 PM",
    dnt: new Date(),
  },
  {
    from: "simran",
    to: "anjali",
    msg: "thanks for helping me yesterday",
    dnt: new Date(),
  },
  {
    from: "harsh",
    to: "yash",
    msg: "don't forget the project presentation",
    dnt: new Date(),
  }
];

chat.insertMany(data);    