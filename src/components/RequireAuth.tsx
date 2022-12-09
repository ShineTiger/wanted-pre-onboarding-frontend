import React from "react";
import { Navigate, Outlet } from "react-router";

const RequireAuth = () => {
  const TOKEN_KEY = "access_token";

  const getTokenValue = (tokenKey: string) => {
    const tokenValue = localStorage.getItem(tokenKey);
    return tokenValue;
  };

  //발급받은 토큰의 타입을 확인하고 빈값이 아닌지 확인하는 함수
  const isLogined = (getTokenValue: string | null) => {
    if (typeof getTokenValue === "string" && getTokenValue.length > 0) {
      return true;
    }
  };

  return (
    <>
      {isLogined(getTokenValue(TOKEN_KEY)) ? (
        <Outlet />
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default RequireAuth;
