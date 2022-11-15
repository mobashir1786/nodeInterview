const express = require("express");
const data1 = require('./expoerts');
const data2 = require('./expoerts');
const obj = require('./expoerts');
const cors=require('cors')

const app = express();

app.use(cors({origin:"http://localhost:3000"}))
//middleware
const middleWare = (req, res, next) => {
    console.log("middleware");
}
app.use(middleWare)


app.get("/", (req, res) => {
    res.send("hello");
    res.end();
});
app.get('/data', (req, res) => {
    res.send("see all the data inside console")
    console.log(data1);
    console.log(data2);
    console.log(obj);
})

//cors
app.get('/cors', (req, res) => {
    res.json({
        name: "md mobashir",
        batch: "EA14",
        course: "Full stack"
    })
})

const PORT = process.env.PORT || 1786;

app.listen(PORT, console.log(`Server started on port ${PORT}`));