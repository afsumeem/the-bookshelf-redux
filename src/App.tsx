import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout";
import { setLoading, setUser } from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hook";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";

function App() {
  const dispatch = useAppDispatch();

  // set user

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
