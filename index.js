import express from 'express'

// import { deleteModule, getModules, insertModule, updateModule
//      } from './static-app.js';

import {insertModule} from './mongdb-app.js'


const app = express();

app.use(express.json())

const port = 1234;

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

app.get('/',(req, res)=>{
    res.json('Nomenclador')
    })

app.get('/nomenclador',(req, res)=>{
    res.json(getModules())
    })

app.post('/nomenclador',(req, res)=>{
    res.json(insertModule(req.body))
    })    

app.delete('/nomenclador/:id',(req, res)=>{
    const id = req.params.id
        res.json(deleteModule(id))
    })  
    
app.put('/nomenclador/:id',(req, res)=>{
    const id = req.params.id
      res.json(updateModule(id, req.body))
    })        
    


