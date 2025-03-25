import { useEffect, useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    const response = await axios.post(`${process.env.API_URL}/ai/get-review`, {
      code,
    });
    setReview(response.data);
  };

  return (
    <>
      <main>
        <div className="left">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "auto",
            }}
          />
          <button onClick={reviewCode} className="review-btn">
            Review
          </button>
        </div>

        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
