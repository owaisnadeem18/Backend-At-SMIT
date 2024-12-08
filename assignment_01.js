// So far , we have covered Dynamic routes , query ,params ,initializing the project in backend learning 

// Here is the assignment to have a strong grip on backend query params topic with an array  

// ----------------- Assignment # 01 ----------------

//1.Make an array for tasks , array of obj 

//2.get ki request krni he  , is mein saare task aajaen 

//3.query ke andar agr auth ho and auth true ho jabhe ae warna unauthorized ka msg aajae

//4.get ka route banega like /task/:id , array mein id wala object find out krke aap response mein bhejdenge

//5.post ki request hogi jis mein ham task array mein add krenge.
  
// -------------- Starting the assignment ----------------- 


// task 01:
const tasks = [
    { id: 1, taskName: "Complete project report", status: "pending" },
    { id: 2, taskName: "Attend team meeting", status: "completed" },
    { id: 3, taskName: "Design new logo", status: "onhold" },
    { id: 4, taskName: "Submit expense reports", status: "completed" },
    { id: 5, taskName: "Update website content", status: "pending" },
    { id: 6, taskName: "Fix bug in the app", status: "onhold" },
    { id: 7, taskName: "Write code documentation", status: "pending" },
    { id: 8, taskName: "Plan marketing strategy", status: "completed" },
    { id: 9, taskName: "Organize team building event", status: "onhold" },
    { id: 10, taskName: "Review contract terms", status: "completed" }
  ];

const express = require("express")

const app = express();

app.get("/"  , (req , res) => {
    res.send("Doing Assignment 01")
})

// task 02:
// app.get("/tasks"  , (req , res) => {
//     res.send(tasks.map( (item) => {
//         return (
//             item.taskName
//         )
//     }
// ))
// console.log(tasks.map(item => item.taskName))
// })

// task 03:
// app.get("/tasks" , (req , res) => {
//     const { auth } = req.query

//     let task = tasks.map( item => item.taskName )

//     if(auth == "true") {
//         res.send(task)
//     } else {
//         res.status(401).send("UnAuthorized")
//     }

// })

// task 04:
app.get("/tasks/:id" , (req , res) => {

    const id = parseInt(req.params.id) ;

        const taskId = tasks.find(TaskId => TaskId.id === id)
        console.log(taskId)
        if (taskId) {
            res.send(taskId)
        } else {
            res.send(`TaskId = ${id} is not found`)
        }
})


app.listen(3001)

