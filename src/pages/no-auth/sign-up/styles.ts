import { Form } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1400px) {
    padding: 0 50px 0 100px;
  }

  @media (max-width: 1100px) {
    padding: 0 25px 0 50px;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 700px;
    height: auto;
    object-fit: cover;
    justify-self: self-end;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      display: none;
    }
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex: 40%;
`;
export const RightSide = styled.div`
  flex: 0 0 60%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FormFormik = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  gap: 20px;

  input {
    padding: 8px;
    border-radius: 18px;
    border: 1px solid #ccc;
    width: 290px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 18px;
  border: 1px solid #ccc;
  width: 1000px;
`;

export const Label = styled.label`
  margin-left: 5px;
  font-weight: bold;
  display: block;
`;

// TODO: adapt design to mobile;
