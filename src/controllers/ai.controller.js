import aiServices from "../services/ai.service.js"; // Add .js extension for ESM

const getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Code is required");
  }

  const response = await aiServices(code);
  res.send(response);
};

// Export using ES Module syntax
export { getReview };