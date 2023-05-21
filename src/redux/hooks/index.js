import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/index.js";

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;