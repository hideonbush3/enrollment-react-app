import React from "react";
import { useState } from "react";
import "../App.css";

const EnrollmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    setWelcomeMessage(`환영합니다 ${firstName} ${lastName} 님!`);
    e.preventDefault(); // submit 기능 중지
  };
  return (
    <div>
      <form className="enrolForm" onSubmit={handleSubmit}>
        <h1>대학생 상세 정보 등록 양식</h1>

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            /* onBlur 이벤트가 발생하면 그 이벤트를 발생시킨
            주체의 value로 firstName state의 값을 바꾼다
            여기서 주체는 onBlur를 포함하고 있는 input태그임 */
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
      <label id="studentMsg" className="message">
        {welcomeMessage}
      </label>
    </div>
  );
};

export default EnrollmentForm;
