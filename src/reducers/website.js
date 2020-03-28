const initialState = {
  mainMenuIsActive: false
};

const websiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAIN_MENU_IS_ACTIVE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default websiteReducer;
