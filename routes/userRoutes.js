import express from "express";
import User from '../models/users.model.js'

const router = express.Router()

router.route('/').get((async (req, res) => {
    const users = await User.find({});

    if(!users){
        res.status(404);
        throw new Error('Users not found!')
    }

    res.status(200).json(users)
}))

router.route('/').post(async (req, res) => {
    const { name, surname, profession, age, isFeelingGood } = req.body;
    const user = await User.create({
        name,
        surname,
        profession,
        age,
        isFeelingGood
    })

    if(!user) {
        res.status(400)
        throw new Error('Bad Data!')
    }

    res.status(200).json(user)
})

router.route('/:id').get(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404);
        throw new Error('User not found!')
    }

    res.status(200).json(user)
})

export default router;