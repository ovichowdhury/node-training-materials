const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Role List");
})

module.exports = router;