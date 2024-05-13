import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootEle = document.querySelector("#root");
const root = createRoot(rootEle);

root.render(<App />);
