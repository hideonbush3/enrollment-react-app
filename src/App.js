import React, {useState} from 'react';
import EnrollmentForm from "./components/EnrollmentForm";

// EnrollmentForm 이라는 폼을 return 하도록
// 정의된 App 컴포넌트
const App = () => {
    const [program, setProgram] = useState('UG');
    const [seats, setSeats] = useState(100);    // 참가가능 인원
    const handleChange = (e) => {
        setProgram(e.target.value);
    };

    // 참가가능 인원수를 변경하는 함수
    const setUpdateSeats = (modifySeat) => {
        setSeats(modifySeat);
    }

    return(
        <div className="App">
            <div className="programs">
                <label>프로그램 참가가능 인원 수 : {seats}</label>
                <br/>
                <label>프로그램 종류 : </label>
                <select className="appDropDowns" onChange={handleChange} value={program}>
                    <option value="UG">학사과정(대학교)</option>
                    <option value="PG">석사과정(대학원)</option>
                </select>
            </div>
            <EnrollmentForm chosenProgram={program}
                            currentSeat={seats}
                            setUpdateSeats={setUpdateSeats}/>
        </div>
    )
};

// 컴포넌트나 모듈형태로 작성하는 경우
// 기본적으로 내보내기할 함수명 저장
export default App;