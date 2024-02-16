import axios from "axios";
import express from "express";

const app = express();
const PORT=3000;

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try {
        const results= await axios.get("https://secrets-api.appbrewery.com/random")
        res.render("index.ejs",{secret: results.data.secret , user:results.data.username});
    } catch (error) {
        console.log("Error:",error.response.data);
        res.status(500);
    }
})

app.listen(PORT , ()=>{
    console.log(`Server running on port: ${PORT}`);
})