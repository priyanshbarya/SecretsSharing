import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StoreProfile = () => {
  const { userData } = useParams();
  const navigate = useNavigate();
  if (!userData) {
    navigate("/");
  }
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userInfo", userData);
      navigate("/landing");
    }
  }, [navigate, userData]);

  return <></>;
};

export default StoreProfile;
