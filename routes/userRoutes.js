const { Router } = require("express");
const {
  getUser,
  putUser,
  postUser,
  deleteUser,
} = require("../controllers/userController");
const router = Router();

router.get("/", getUser);

router.put("/:id", putUser);

router.post("/", postUser);

router.delete("/:id", deleteUser);

module.exports = router;
