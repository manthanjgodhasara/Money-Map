export default (state, action) => {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "add":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "login":
      return {
        ...state,
        loggedIn: true,
      };

    case "edit":
      return {
        ...state,
        isEditing: true,
        editId: action.payload,
        editTrans: state.transactions.find((transaction) => transaction.id === action.payload)
      };

    case "notEditing":
      return {
        ...state,
        isEditing: false,
        editId: "",
        editTrans: { id: "", name: "", category: "", date: "", amount: "" },
      };

    case "setTrans":
      return{
        ...state,
        transactions: action.payload
      }

    default:
      return state;
  }
};
