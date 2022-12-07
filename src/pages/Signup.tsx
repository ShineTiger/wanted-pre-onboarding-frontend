import React, { useState } from "react";

type ProfileValidation = {
  email?: boolean;
  password?: boolean;
};

const Signup = () => {
  const [validation, setValidation] = useState<ProfileValidation>({
    email: false,
    password: false,
  });

  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const passwordRegex = /.{8,}/;

  const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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

  return (
    <>
      <h2>회원가입</h2>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          required
          onChange={validationHandler}
        ></input>
        <br></br>
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
          완료
        </button>
      </form>
    </>
  );
};

export default Signup;
