const router = require('express').Router()
const validation = require('../middleware/validation')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/login', validation.validatePayload(['email', 'password']), async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if(!user) return res.status(401).send({error: "The email does not correspond to an existing account"})
    const passwordMatched = bcrypt.compareSync(req.body.password, user.password)

    if(!passwordMatched) return res.status(401).send({error: "The password is incorrect"})

    const token = jwt.sign({_id: user.id}, "efwfnk3nrn3urn3$$%@*$WED#$AW", {expiresIn: '1d'})

    res.send({success: 'Login was successful',token})

})

module.exports = router
