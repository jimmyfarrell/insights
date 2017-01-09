// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import insightsReducer from './insightsReducer';
import { $$initialState as $$insightsState } from './insightsReducer';

export default {
  $$insightsStore: insightsReducer,
};

export const initialStates = {
  $$insightsState,
};
