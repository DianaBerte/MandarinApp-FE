import { useSelector, useDispatch } from "react-redux";

// Select state from Redux store
export const useDefaultSelector = (selector) => useSelector(selector);

// Dispatch actions to the store
export const useDefaultDispatch = () => useDispatch();