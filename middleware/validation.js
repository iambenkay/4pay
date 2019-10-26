module.exports.validatePayload = (allowed, validators={}, errors={}) => (req, res, next) => {
    if (!allowed.every(x => x in req.body))
        return res.status(400).send({ error: 'Provide ' + allowed.filter(x => !(x in req.body)) })
    const error = {}
    for(let x of allowed){
        if(x in validators && !validators[x](req.body[x]))
            error[x] = errors[x] || `${x} provided is invalid`
    }

    if(Object.keys(error).length) return res.status(400).send({error})

    const payload = {}
    allowed.forEach(key => {
        payload[key] = req.body[key]
    })
    req.body = Object.assign({}, payload)
    next()
}
