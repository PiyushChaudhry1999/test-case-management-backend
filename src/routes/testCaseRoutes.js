const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /api/testcases:
 *   get:
 *     summary: Get test cases
 *     tags: [Test Cases]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Test cases fetched
 */
router.get("/", authenticate, (req, res) => {
  res.json({ message: "Test cases fetched successfully" });
});

/**
 * @swagger
 * /api/testcases:
 *   post:
 *     summary: Create test case
 *     tags: [Test Cases]
 *     security:
 *       - bearerAuth: []
 */
router.post("/", authenticate, authorize("admin", "test-lead"), (req, res) => {
  res.json({ message: "Test case created successfully" });
});

module.exports = router;
