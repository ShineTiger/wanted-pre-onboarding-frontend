import styled from "styled-components";

export const CheckboxList = styled.div`
  padding: 20px 50px;
  margin: 0;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0px 6px 10px #ddd;

  li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 1rem;
    padding: 1.5rem 0;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  li:last-child {
    border-bottom: none;
  }
  li::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  li input {
    display: inline-block;
  }
  li input[type="checkbox"] {
    width: 30px;
    height: 30px;
  }
  li span {
  }
`;

export const EditButtons = styled.div`
  display: block;
  width: 14%;
  input {
    width: 46.8%;
    font-size: 1rem;
    padding: 0.3rem 0;
  }

  input:first-child {
    margin-right: 10px;
  }
`;

export const EditContent = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 1rem;
  }
`;

export const EditInput = styled.div`
  position: absolute;
  left: 50px;
  input {
    font-size: 1rem;
  }
`;
