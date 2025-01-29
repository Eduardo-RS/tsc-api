import { Router } from "express"
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/user.controllers";

const router = Router();

router.get('/user', getUsers);
// router.get('/user/:id', getUserID);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


router.get('/hello', (req, res) => {
    res.send('Hello world using router from express');
})


export default router