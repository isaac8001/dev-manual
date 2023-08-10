import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import "./article.css";

const Inputbutton = () => {
  // const vaigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   userNM: "",
  //   email: "",
  //   password: "",
  // });

  // const onChangeInput = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(formData);
  // };

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const sendData = {
  //     userNM: formData.userNM,
  //     email: formData.email,
  //     password: formData.password,
  //   };
  //   console.log(sendData);
  //   axios.post("");
  // };
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    age: "",
  });
  const { name, nickname, age } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
      age: "",
    });
  };

  return (
    <>
      <article>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <input name="age" placeholder="나이" onChange={onChange} value={age} />
        <button onClick={onReset}>초기화</button>
        <div style={{ marginTop: "20px" }}>
          <b>값: </b>
          이름 : {name} 닉네임 : {nickname} 나이 : {age}
        </div>
        <br />
        <hr />
      </article>
    </>
  );
};
export default Inputbutton;
