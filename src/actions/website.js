const setMainMenuIsActive = (mainMenuIsActive) => {
  return {
    type: 'SET_MAIN_MENU_IS_ACTIVE',
    payload: {
      mainMenuIsActive
    }
  };
};

export default setMainMenuIsActive;
