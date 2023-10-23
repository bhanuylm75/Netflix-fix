import {configureStore} from "@reduxjs/toolkit"
import userslice from "./Userslice"
import movies from "./movieslice"
import gptslice from "./gptslice"
export default configureStore({
  reducer:
  { userslice:userslice,
    movies:movies,
    gptslice:gptslice
   }
})