const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /api/testcases:
 *   get:
 *     summary: Get all test cases (all authenticated users)
 *     tags: [Test Cases]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Test cases fetched successfully
 */
router.get("/", authenticate, (req, res) => {
  res.json({ message: "Test cases fetched successfully" });
});

/**
 * @swagger
 * /api/testcases:
 *   post:
 *     summary: Create a new test case (Admin/Test Lead)
 *     tags: [Test Cases]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Test case created successfully
 *       403:
 *         description: Forbidden
 */
router.post("/", authenticate, authorize("admin", "test-lead"), (req, res) => {
  res.json({ message: "Test case created successfully" });
});

module.exports = router;
