import { createStore } from 'redux'

const defaultState = {
    tmpName: '',
    setFileNameDisplay: 'none',
    video: {},
    currentTime: 0
}

const reducer = (state:any = defaultState, action:any) => {
    switch (action.type) {
        case 'SET_TMP_NAME':
            return { ...state, tmpName: action.payload }
        case 'SET_FILE_NAME_DISPLAY':
            return { ...state, setFileNameDisplay: action.payload }
        case 'SET_VIDEO':
            return { ...state, video: action.payload }    
        case 'SET_CURRENT_TIME':
            return { ...state, currentTime: action.payload }    
        default: 
            return state;
    }
  }
  
export const store = createStore(reducer);
