const express =  require('express'); 
const mongoose =  require('mongoose');
const UserModel = require('./models/Users')
const cors = require('cors');
const app = express();
let port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://127.0.0.1:27017/crud');


app.get('/',async(req,res)=>{
    await UserModel.find({})
    .then(result => res.json(result)).catch(err => res.json(err));
    });

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
       .then(user => res.json(user))
       .catch(err => res.status(400).json({ error: err.message }));
 });

app.get('/getUser/:id',(req,res)=>{
    let id = req.params.id;
    UserModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));

});

app.put('/updateUser/:id',async(req,res)=>{
    let id = req.params.id;
   await UserModel.findByIdAndUpdate({_id : id},{
        name : req.body.name ,
        age : req.body.age,
        email : req.body.email
     }).then(users => res.json(users)).catch(err => res.json(err))

})

app.delete('/deleteUser/:id',(req,res)=>{
    let id = req.params.id;
   UserModel.findByIdAndDelete({_id : id}).then(user => res.json(user)).catch(err => res.json(err));
})
 
app.listen(port, ()=>{
    console.log(`server is listening on port : ${port}`);
})