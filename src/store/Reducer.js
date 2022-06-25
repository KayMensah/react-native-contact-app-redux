const intial = [
  {
    user: null,
    authenticated: "false",
  },
];

const appReducer = (state = intial, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_AUTHENTICATED":
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};
export default appReducer;
