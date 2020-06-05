const express = require('express');
//const bcrypt= require('bcrypt-nodejs')
const cors = require('cors')

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

const database={
    users:[
    {  
        id:123,
        name:'john',
        username:'jon',
        email:'john@gmail.com',
        password:'test',
        joined:new Date()
    },
    {  
        id:124,
        name:'sally',
        username:'sal',
        email:'sally@gmail.com',
        password:'password',
        joined:new Date()
    }
    ]
}

app.get('/',(req,res)=>{
    res.send(database.users)
})

app.post('/login',(req,res)=>{
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json(database.users[0])
        }
    else{
        res.status(400).json("error login in")
    }
})

app.post('/signup',(req,res)=>{
    const {email, name,username}= req.body;
    database.users.push({
        id:125,
        name:name,
        email:email,
        username:username,
        joined:new Date()
    })
    res.json(database.users[database.users.length-1])
})

app.post('/user',(req,res)=>{
    const {id} = req.body;
    let found=false
    database.users.forEach(user => {
        if(user.id === +id){
            found=true;
            return res.json(user);
        }
    })
    if(!found){
        return res.status(400).json("User not found")
    }
})


app.listen(3001,()=>{
    console.log('App is running on port 3001')
})

