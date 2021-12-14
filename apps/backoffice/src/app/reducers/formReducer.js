const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        [action.field]: action.payload
      };
    case 'REMOVE-ORDER-ITEMS':
      return {
        ...state,
        product: '',
        unitPrice: '',
        qty: '',
        discount: ''
      };
    default:
      throw new Error("That action doesn't exist");
  }
};

export default formReducer;
