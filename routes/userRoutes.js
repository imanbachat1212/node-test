import express from "express";
import {users} from '../data/users.js'

const router = express.Router()

router.route('/').get(((req, res) => {
    res.status(200).json(users)
}))

router.route('/:id').get((req, res) => {
    const user = users.filter((user) => user.id === Number(req.params.id))
    res.status(200).json(user);
})

export default router;