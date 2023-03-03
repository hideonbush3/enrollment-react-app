import React from 'react';
import EnrollmentForm from "./components/EnrollmentForm";

// EnrollmentForm 이라는 폼을 return 하도록
// 정의된 App 컴포넌트
const App = () => {
    return(
        <div>
            <EnrollmentForm />
        </div>
    )
};

// 컴포넌트나 모듈형태로 작성하는 경우
// 기본적으로 내보내기할 함수명 저장
export default App;