/// <reference path="../types/log-suppress.d.ts" />
import React from "react";
import { render } from "react-dom";
import { init as suppress } from "log-suppress";
import "./index.css";
import { App } from "./App";

suppress(console);

const rootElement = document.getElementById("root");

render(<App />, rootElement);
