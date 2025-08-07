const express = require("express");
const app = express();


const jwt = require("jsonwebtoken")
app.use(express.json)

const posts = [
  {
    username: "Fatima",
    title: "Post 1",
  },
  {
    username: "Ali",
    title: "Post 2",
  },
];
app.get("/post", (req, res) => {
  res.json(posts);
});

app.post('/login', (req, res)=>{
    // Authenticate User 

    const username = req. body.username
})
app.listen(8000);
console.log("Server Up");
