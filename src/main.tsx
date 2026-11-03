import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import App from "./App";
import "./styles.css";
const url=import.meta.env.VITE_CONVEX_URL;
const client=new ConvexReactClient(url||"https://example.convex.cloud");
ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><ConvexAuthProvider client={client}><App/></ConvexAuthProvider></React.StrictMode>);
