import {actions} from "../slices/cart.slice";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";

const rootActions = {...actions};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [dispatch]
    );
};