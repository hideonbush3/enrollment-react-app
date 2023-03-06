import React from "react";
import { useState } from "react";
import "../App.css";
import { MdEdit, MdDelete} from 'react-icons/md';

const EnrollmentForm = (props) => {
  // 폼에 입력한 이름과 성을 기억하기 위해서 state형 변수 선언
  // onBlur 이벤트 발생시 입력한 이름/성/이메일을
  // firstName, lastName, email 변수에 저장
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('');
  // state형 변수에 저장된 이름과 성을 메세지로 출력하기위해 선언
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [msgStyle, setMsgStyle] = useState("message");

  // 등록하기 버튼 클릭시 '환영합니다 이름 성 님!' 을 폼 아래쪽에 출력함
  const handleSubmit = (e) => {
    let msg = `마감된 프로그램 입니다`;
    setMsgStyle("redOne");
    // 참여가능 인원 수 감소
    // props로 전달받은 함수 setUpdateSeats 를 이용해서
    // 상위 컴포넌트의 seats 변수를 조작함
    if (props.currentSeat - 1 >= 0) {
      props.setUpdateSeats(props.currentSeat - 1);
      setMsgStyle("message");
      msg = `환영합니다, ${firstName} ${lastName} 님\n
       ${email}로 메일을 보냈습니다`;

      // 등록완료된 학생정보에 사용할 key 생성
      const rndKey = Math.floor(1000+Math.random()*9000);
      // 생성한 key와 등록완료된 학생정보를 props에 저장
      let stud = {
        key: rndKey,
        fname: firstName, // EnroList의 fieldname임
        lname: lastName,
        program: props.chosenProgram,
        email: email,
        edit: <MdEdit className="actionIcon" />,
        delete: <MdDelete className="actionIcon" />
      };
      props.setStudDetails(stud)
    }
    setWelcomeMessage(msg);
    e.preventDefault(); // submit 기능 부모요소에게 전파 중지, 이것을 빼면 submit하고 페이지가 초기화됨
  };

  const handleInputChange = (setInput, e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div className='enrolContainer'>
      <form className="enrolForm">
        <ul className='ulEnrol'>
          <li>
            <label htmlFor='FirstName'></label>
            <input type="text" id='FirstName'
                   name='firstName' className='inputFields'
                   placeholder='FirstName' value={firstName}
                   onChange={e => handleInputChange(setFirstName, e)} />
          </li>
          <li>
            <label htmlFor='LastName'></label>
            <input type="text" id='LastName'
                   name='lastName' className='inputFields'
                   placeholder='LastName' value={lastName}
                   onChange={e => handleInputChange(setLastName, e)} />
          </li>
          <li>
            <label htmlFor='Email'></label>
            <input type="text" id='Email'
                   name='email' className='inputFields'
                   placeholder='Email' value={email}
                   onChange={e => handleInputChange(setEmail, e)} />
          </li>
          <li id='center-btn'>
            <button type='submit' id='btnEnrol'
            name='enrol' onClick={handleSubmit}>
              등록하기</button>
          </li>
          <li>
            <label id='studentMsg' className={msgStyle}>
              {welcomeMessage}
            </label>
          </li>
        </ul>
      </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
