import * as constants from "../actions/constants";

const sequencerActions = (state, action) => {
  let tracks;
  switch (action.type) {
    case constants.SET_BPM:
      return { ...state, bpm: action.bpm };

    case constants.SET_STEPS:
      tracks = { ...state.tracks };
      if (!tracks[action.id]) tracks[action.id] = {};
      tracks[action.id].steps = action.steps;
      return { ...state, tracks };

    case constants.SET_DIRECTION:
      tracks = { ...state.tracks };
      if (!tracks[action.id]) tracks[action.id] = {};
      tracks[action.id].direction = action.direction;
      return { ...state, tracks };

    case constants.SET_TIME:
      return { ...state, time: action.time };

    default:
      return { ...state };
  }
};
export default sequencerActions;
