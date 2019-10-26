const router = require('express').Router()
const validation = require('../middleware/validation')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

router.route('/')
    .post(validation.validatePayload([
        'email',
        'password',
        'fullname',
        'phone',
        'accountType',
        'country',
        'gender'
    ], {
            email: value => /^.+@.+\..+$/.test(value),
            password: value => /^.{8,}$/.test(value),
            phone: value => /^\+[0-9]{13}$/.test(value),
            accountType: value => /^(freelancer|employer)$/.test(value),
            gender: value => /^(M|F)$/.test(value)
        }), (req, res) => {
            req.body.password = bcrypt.hashSync(req.body.password)
            const user = new User(req.body)
            user.save()
                .then(doc => {
                    const data = doc.toObject()
                    delete data.password
                    return res.send(data)
                })
                .catch(({message}) => {
                    res.status(400).send({error: message})
                })
        })


module.exports = router
