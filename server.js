import app from "./src/app.js"; // Add .js extension for ESM

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
