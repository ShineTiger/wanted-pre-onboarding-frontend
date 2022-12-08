import styled from "styled-components";

export const UserProfileForm = styled.form`
  width: 80%;
  padding: 0 30px;
  margin: 0 auto;
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 1.3rem;
    border: 1px solid black;
    margin-bottom: 20px;
  }
  button[type="submit"] {
    width: 100%;
    font-size: 1.3rem;
  }
`;
