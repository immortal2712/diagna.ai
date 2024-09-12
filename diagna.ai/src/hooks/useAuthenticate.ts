import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function useAuthenticate() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfilePic(user?.photoURL || "");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return { profilePic, handleClick };
}
