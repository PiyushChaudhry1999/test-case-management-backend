const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    // Just for test
    console.log(req.body);
    res.json({ success: true, body: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
