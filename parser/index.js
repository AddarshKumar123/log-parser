const express=require("express");
const app=express();
const port=5000;

app.use(express.json());
app.use(express.text({type:"text/plain"}));

const parseLog=require("./modules/parser");

app.post("/logs",(req,res)=>{
    try{
        const parsed=parseLog(req.body);
        res.send(parsed);
    }catch(err){
        console.log(err);
        res.json({error: "something went wrong"});
    }
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})