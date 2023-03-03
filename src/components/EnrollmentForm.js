import React from "react";
import { useState } from "react";
import "../App.css";

const EnrollmentForm = (props) => {
  // 폼에 입력한 이름과 성을 기억하기 위해서 state형 변수 선언
  // onBlur 이벤트 발생시 입력한 이름과 성을
  // firstName, lastName에 저장
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      msg = `환영합니다, ${firstName} ${lastName} 님!`;
    }
    setWelcomeMessage(msg);
    e.preventDefault(); // submit 기능 부모요소에게 전파 중지, 이것을 빼면 submit하고 페이지가 초기화됨
  };

  return (
    <div>
      <form className="enrolForm" onSubmit={handleSubmit}>
        <h1>{props.chosenProgram}대학생 상세 정보 등록 양식</h1>

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            /* e는 이벤트 객체임 React에서 이벤트 핸들러 함수는
             항상 이벤트 객체를 인수로 받음 이벤트 객체에는 이벤트에 대한 정보가 담겨있음
               e.target은 이벤트가 발생한 요소 input을 나타냄
               e.target.value는 이벤트가 발생한 요소의 값 */
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">등록하기</button>
        </div>
      </form>
      <label id="studentMsg" className={msgStyle}>
        {welcomeMessage}
      </label>
    </div>
  );
};

export default EnrollmentForm;
