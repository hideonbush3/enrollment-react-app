import React, {useState} from 'react';
import EnrollmentForm from "./components/EnrollmentForm";

// EnrollmentForm 이라는 폼을 return 하도록
// 정의된 App 컴포넌트
const App = () => {
    const [program, setProgram] = useState('UG')
    const handleChange = (e) => {
        setProgram(e.target.value);
        e.preventDefault();
    };

    return(
        <div className="App">
            <div className="programs">
                <label>프로그램 종류 : </label>
                <select className="appDropDowns" onChange={handleChange} value={program}>
                    <option value="UG">학사과정(대학교)</option>
                    <option value="PG">석사과정(대학원)</option>
                </select>
            </div>
            <EnrollmentForm chosenProgram={program}/>
        </div>
    )
};

// 컴포넌트나 모듈형태로 작성하는 경우
// 기본적으로 내보내기할 함수명 저장
export default App;