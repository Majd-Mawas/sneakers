const loggedReducer = (state = false,action) => {
  switch (action.type) {
    case 'HAVEPRODUCT':
      return true
      case 'DONTHAVEPRODUCT':
      return false
    default:
      return state;
  }
}

export default loggedReducer;