import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootReducer } from '../redux';


export const useTypeSelector: TypedUseSelectorHook<RootReducer> = useSelector