import React, { useState } from "react";
import "../EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";

// 과정 등록 학생 리스트의 컬럼 정의
const columns = [
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    isResizable: false,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    isResizable: false,
  },
  {
    key: "program",
    name: "과정종류",
    fieldName: "program",
    minWidth: 90,
    isResizable: false,
  },
  {
    key: "email",
    name: "이메일",
    fieldName: "email",
    minWidth: 130,
    isResizable: false,
  },
];

// 테스트용 데이터 삽입 - 컬럼 정의시 사용했던 fieldName으로 값 초기화
let items = [];
for (let i = 1; i <= 5; ++i) {
  let data = {
    key: i,
    fname: "FirstName" + i,
    lname: "LastName" + i,
    program: "UG",
    email: "Email" + i,
  };
  items.push(data);
}
const EnrolList = () => {
    return (
        <div className='enrolList'>
            <DetailsList items={items} columns={columns} />
        </div>
    )
};

export default EnrolList;
