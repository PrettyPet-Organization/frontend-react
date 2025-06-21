import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../../app/store';
import { login, logout } from '../../../entities/User/model/userSlice';
import type { User } from '../../../entities/User/model/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthorized } = useSelector((state: RootState) => state.user);

  const loginUser = (userData: User) => {
    dispatch(login(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthorized,
    loginUser,
    logoutUser,
  };
}; 