import { fetchUser } from "../../api/userApi";
import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    //call api
    const res = await fetchUser();
    console.log(res);
    if (res.user && res.user._id) {
     return dispatch(getUserSuccess(res.user));
    }
    dispatch(getUserFail("User Not Found"))
  } catch (error) {
    dispatch(getUserFail(error));
  }
};
