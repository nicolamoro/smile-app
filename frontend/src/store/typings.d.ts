/* eslint-disable @typescript-eslint/no-unused-vars */

import * as reactRedux from "react-redux";
import { State } from "./index";

declare module "react-redux" {
  export interface DefaultRootState extends State {}
}
