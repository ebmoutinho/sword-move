import { TextEncoder, TextDecoder } from "util";

Object.assign(global, { TextEncoder, TextDecoder }); //for react-router-dom

import "@testing-library/jest-dom";
import "jest-styled-components";
