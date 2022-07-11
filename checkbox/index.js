// 한가지만 선택

import * as S from "./MenuFilter.styles";

export default function MenuFilterPage(props: any) {
  const menuData = [
    { key: "0", value: "비건", checked: false, index: 0 },
    { key: "1", value: "아시안푸드", checked: false, index: 1 },
    { key: "2", value: "양식", checked: false, index: 2 },
    { key: "3", value: "일식", checked: false, index: 3 },
    { key: "4", value: "중식", checked: false, index: 4 },
    { key: "5", value: "한식", checked: false, index: 5 },
    { key: "6", value: "할랄", checked: false, index: 6 },
  ];

  const onChangeMenu = (checked: any, item: any) => {
    if (checked) {
      props.setMenuTagCheckList([item]);
      props.setMenuHashTag([item]);
    } else if (!checked) {
      props.setMenuHashTag(props.menuHashTag.filter((el: any) => el !== item));
      props.setMenuTagCheckList(
        props.menuTagCheckList.filter((el: any) => el !== item)
      );
    }
  };
  return (
    <S.OpenTag>
      {menuData.map((el) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            value={el.value}
            onChange={(e) => {
              onChangeMenu(e.target.checked, e.target.value);
            }}
            checked={props.menuTagCheckList.includes(el.value)}
          />
          <span className="checkbox_text">{el.value}</span>
        </label>
      ))}
    </S.OpenTag>
  );
}

// 한가지만 선택 스타일

import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

export const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  .checkbox input {
    display: none;
  }

  .checkbox {
    display: flex;
    margin: 0px 30px 10px 0px;
    @media ${breakPoints.mobile} {
    margin: 0 6px 8px 0;
  }
  }

  .checkbox_text {
    display: flex;
    background-color: #d2d2d2;
    margin-left: 10px;
    font-size: 16px;
    color: #ffffff;
    padding: 7px 20px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: #ff9a31;
      color: #ffffff;
      @media ${breakPoints.mobile} {
        background-color: #d2d2d2;
      }
    }
    @media ${breakPoints.mobile} {
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 20px;
      margin:0;
  }
  }

  .checkbox_icon {
    display: flex;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  .checkbox input:checked + .checkbox_text {
    color: #ffffff;
    background-color: #ffa230;
  }
`;

// 중복선택

import * as S from "./MoodFilter.styles";

export default function MoodFilterPage(props: any) {
  const moodData = [
    { key: "0", value: "가족들과", checked: false, index: 0 },
    { key: "1", value: "동창회자리로좋은", checked: false, index: 0 },
    { key: "2", value: "부모님과함께", checked: false, index: 0 },
    { key: "3", value: "소개팅", checked: false, index: 0 },
    { key: "4", value: "술자리로좋은", checked: false, index: 0 },
    { key: "5", value: "썸타는사람과", checked: false, index: 0 },
    { key: "6", value: "애인과함께", checked: false, index: 0 },
    { key: "7", value: "친구와함께", checked: false, index: 0 },
    { key: "8", value: "혼밥하기좋은", checked: false, index: 0 },
    { key: "9", value: "혼술하기좋은", checked: false, index: 0 },
    { key: "10", value: "회식자리로좋은", checked: false, index: 0 },
  ];

  const onChangeMood = (checked: any, item: any) => {
    if (checked) {
      props.setMoodHashTag([...props.moodHashTag, item]);
    } else if (!checked) {
      props.setMoodHashTag(props.moodHashTag.filter((el: any) => el !== item));
    }
  };

  return (
    <S.OpenTag>
      {moodData.map((el) => (
        <label className="checkbox" key={el.key}>
          <input
            type="checkbox"
            value={el.value}
            onChange={(e) => {
              onChangeMood(e.target.checked, e.target.value);
            }}
            checked={props.moodHashTag.includes(el.value)}
          />
          <span className="checkbox_text">
            <img className="check_icon" src="/images/check.png" />
            {el.value}
          </span>
        </label>
      ))}
    </S.OpenTag>
  );
}

// 중복선택 스타일

import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

export const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 16px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  .checkbox input {
    display: none;
  }
  .checkbox {
    display: flex;
    margin: 0px 30px 10px 0px;
    @media ${breakPoints.mobile} {
      margin: 0 8px 8px 0;
    }
  }
  .checkbox_text {
    display: flex;
    margin-left: 10px;
    font-size: 16px;
    color: #d8d8d8;
    padding: 7px 20px;
    border-radius: 50px;
    border: 3px solid #dbdbdb;
    cursor: pointer;
    @media ${breakPoints.mobile} {
      border: 2px solid #dbdbdb;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 20px;
      margin: 0;
    }
    &:hover {
      color: #ff9a31;
      border: 3px solid #ff9a31;
      @media ${breakPoints.mobile} {
        border: 2px solid #dbdbdb;
        color: #d8d8d8;
      }
    }
    .check_icon {
      display: none;
      width: 20px;
      height: 15px;
      margin: 4px 10px 0px 0px;
      @media ${breakPoints.mobile} {
      width: 10px;
      height: 7px;
      margin: 5px 5px 0px 0px;
    }
    }
  }
  .checkbox_icon {
    display: flex;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 3px solid #cacaca;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    
  }
  .checkbox input:checked + .checkbox_text {
    border: 3px solid #ffa230;
    color: #ffa230;
    .check_icon {
      display: flex;
    }
    @media ${breakPoints.mobile} {
      border: 2px solid #FFA230;

    }
  }
`;