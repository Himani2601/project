import express from 'express';

const app = express();

app.use(express.json());

//test api for checking backend is working or not
app.use('/test', (req, res) => {
    res.send("api is working");
})

app.listen(5000, () => {
    console.log("Server is running on port no 4000");
});