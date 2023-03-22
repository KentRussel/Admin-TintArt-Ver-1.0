const express = require('express')
const router = express.Router()

routet.post


router.get('/', (req, res) => {
    res.send('Users List')

})

router.get('/new', (req, res) =>{
    res.send("User New Form")

})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.params.id
    res.send(`Get user with ID ${req.params.id}`)
})

module.exports = router
