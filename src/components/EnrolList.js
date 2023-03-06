import React, { useEffect, useState } from "react";
import "../EnrolList.css";
// Fluent UI React 사용하기
import { DetailsList } from "@fluentui/react/lib/DetailsList";

// 과정 등록 학생 리스트의 컬럼 정의
// 현재 컬럼 앞뒤로 수정, 삭제 버튼 추가
const columns = [
  {
    key: "edit",
    name: "수정",
    fieldName: "edit",
    minWidth: 50,
    isResizable: false,
  },
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
  {
    key: "delete",
    name: "삭제",
    fieldName: "delete",
    minWidth: 50,
    isResizable: false,
  },
];

// 컬럼 정의시 사용했던 fieldName으로 값 초기화
let items = [];

const EnrolList = (props) => {
  // 과정 등록 학생 데이터가 추가될때마다 UI를 재렌더링하기 위해
  // useEffect 리액트 훅 사용
  // useEffect: 컴포넌트 생명주기에 따라 dom 렌더링 처리
  // props 객체에 값이 존재할때마다 detailsList에 렌더링해서 화면에 출력
  useEffect(() => {
    const curItemKey = props.studDetails.key;
    if (curItemKey) {
      items = [...items, props.studDetails];
      props.setStudDetails({});
    }
    // 삭제 기능 수행
    if(props.action === 'delete'){
      // 삭제 대상 아이템을 키로 가져옴
      const deleteItem = items.filter(  // items는 등록된 학생의 모든 정보. 그 중 하나하나씩 검색하면서 키와  App.js에서 넘겨준 selItemKey키가 일치하는지 확인하고 일치하면 deleteItem에 할당
          (item) => item.key === props.selectedItemKey
      )[0];
      // 삭제 대상 아이템만 제외하고 다시 새로운 items 객체 생성
      items = items.filter((item) => item !== deleteItem)
    }
  }, [props]);
  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};

export default EnrolList;
