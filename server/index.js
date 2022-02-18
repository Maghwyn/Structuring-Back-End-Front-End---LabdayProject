import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getUserById, createUser, updateUser, deleteUser } from "./controllers/usersCRUD.js";

const PORT = 5000;
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users/:id', getUserById);
app.post('/users', createUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})