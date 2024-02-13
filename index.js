const express = require('express');
const cors = require('cors');
const app =express()

app.use(cors())
app.use(express.json())
require('dotenv').config()

const port =process.env.PORT || 5000

// JqYFzby3EXdju6Gt
// BdTravel

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORLD}@cluster0.xuxoczf.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();
    const instactorCollation =client.db('CoderMaster').collection('Instactor')
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    app.get('/instactor', async(req,res)=>{
        const qurey ={}
        const result =await instactorCollation.find(qurey).toArray()
        res.send(result)
    })
  } finally {
   
  }
}
run().catch(console.dir);





app.listen(port,()=>{
    console.log('server is running')
})

app.get('/',(req,res)=>{
    res.send('Hello World')

})

app.get('/ball',(req,res)=>{
    res.send('my ball')
})