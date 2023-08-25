import * as redux from 'redux'

import { todoreducers } from "./reducers/todoreducers";
export const store=redux.createStore(todoreducers);