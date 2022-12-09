import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/instance";
import { UserProfileForm } from "../components/UI/UserProfileForm.style";

const Login = () => {
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
      .post("/auth/signin", profile)
      .then((res) => {
        console.log(res.data.access_token);
        if (res.statusText === "OK") {
          localStorage.setItem("access_token", res.data.access_token);
          navigate("/todo");
        }
      })
      .catch((err) => {
        alert("오류가 발생했습니다");
      });
  };
  useEffect(() => {
    console.log(profile);
  });

  return (
    <>
      <h2>로그인</h2>
      <UserProfileForm onSubmit={submitSignupForm}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          required
          onChange={validationHandler}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          required
          onChange={validationHandler}
        ></input>

        <button
          type="submit"
          disabled={validation.email && validation.password ? false : true}
        >
          로그인
        </button>
      </UserProfileForm>
    </>
  );
};

export default Login;
