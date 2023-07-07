const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get("/", pacienteController.getPosts);
router.delete("/delete/:id", pacienteController.deletePost);
router.put("/update/:id", pacienteController.updatePost);
router.post("/create", pacienteController.createPost);

module.exports = router;