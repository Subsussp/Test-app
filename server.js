const express = require("express")
const app = express()
app.use(express.json())
let users = [];

app.get("/users", (req,res) => {
    res.send(users)
})
app.delete('/users/:id', (req,res) => {

    let code = users.findIndex((e) => e.id === req.params.id)
    if (code == -1) {
        res.send("not found #itch") 
        return
    }
        users.splice(code, 1)
        res.send("deleted") 
    })

app.post("/users" , (req, res) => {
    let reqte = req.body
    let code = users.find((x) => x.id == reqte.id )
        if(code){
            res.send("User exists")
            return
        }
            users.push(req.body)
            res.send("Created")
    })

app.listen(3000)