const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let tasks = ["1"]

app.get("/", async (req, res) => {
    res.send(tasks)
})

app.post("/", async (req, res) => {
    console.log(req.params)
    //tasks.push(req.body)
    res.send(tasks)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});