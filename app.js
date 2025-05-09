import express from "express"
import employees from "#db/employees"
const app = express()

app.route('/employees/random').get((req,res)=>{
    const random = Math.floor(Math.random() * employees.length)
    res.send(employees[random])
})

app.route('/employees/:id').get((req,res)=>{
    const id = Number(req.params.id)
    const found = employees.find(employee => employee.id == id)
    if(found){
        res.send(found)
    }else{
        res.status(404).send("Employee not found!")
    }
})

app.route('/employees').get((req, res) => {
    res.send(employees)
  });

  app.route('/').get((req,res)=>{
    res.send("Hello employees!")
})


export default app