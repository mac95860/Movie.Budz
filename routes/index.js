const router = require("express").Router();
//const reviewRoutes = require("./review");
const userRoutes = require("./apiRoutes/routes");


//router.use("/review", reviewRoutes);
router.use("/users", userRoutes);

module.exports = router;