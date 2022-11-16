const express = require("express");
const router = express.Router();

router.get('/', (req, res)=> {
    res.json ({ "castalana" : "jugo"})
});

module.exports = router;