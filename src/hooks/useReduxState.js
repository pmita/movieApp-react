import { useSelector } from "react-redux";

export const useReduxState = async () => {
    // REDUX STATE
    const reduxState = await useSelector((state) => state.movieApp);

    return reduxState ;
}
