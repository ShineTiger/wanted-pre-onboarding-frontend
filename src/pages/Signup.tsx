import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../api/instance";
import ProfileInput from "../components/ProfileInput";
import { UserProfileForm } from "../components/UI/UserProfileForm.style";

type ProfileType = {
  email: string;
  password: string;
};

type ProfileValidation = {
  email?: boolean;
  password?: boolean;
};

const Signup = () => {
  const [profile, setProfile] = useState<ProfileType>({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState<ProfileValidation>({
    email: false,
    password: false,
  });

  //유효성검사에 사용되는 정규식표현
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const passwordRegex = /.{8,}/;

  const navigate = useNavigate();

  //유효성검사
  const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });

    if (name === "email") {
      emailRegex.test(value)
        ? setValidation({ ...validation, email: true })
        : setValidation({ ...validation, email: false });
    } else if (name === "password") {
      passwordRegex.test(value)
        ? setValidation({ ...validation, password: true })
        : setValidation({ ...validation, password: false });
    }
  };

  const submitSignupForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    instance
      .post("/auth/signup", profile)
      .then((res) => {
        console.log(res);
        if (res.statusText === "Created") {
          window.confirm("회원가입이 완료되었습니다. 로그인 하시겠습니까?") &&
            navigate("/login");
        }
      })
      .catch((err) => {
        alert("오류가 발생했습니다");
      });
  };

  return (
    <>
      <h2>회원가입</h2>
      <UserProfileForm onSubmit={submitSignupForm}>
        <ProfileInput
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"이메일을 입력해주세요"}
          required={true}
          onChange={validationHandler}
        ></ProfileInput>
        <ProfileInput
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"비밀번호를 입력해주세요"}
          required={true}
          onChange={validationHandler}
        ></ProfileInput>
        <button
          type="submit"
          disabled={validation.email && validation.password ? false : true}
        >
          완료
        </button>
      </UserProfileForm>
    </>
  );
};

export default Signup;
