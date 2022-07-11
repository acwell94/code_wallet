// 스크립트

import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function DetailMapPage(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f487080ea91748abbd2e3df735d5af4c&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const option = {
          center: new window.kakao.maps.LatLng(
            Number(props.address.place.lng),
            Number(props.address.place.lat)
          ),
          level: 2,
        };
        const map = new window.kakao.maps.Map(container, option);

        const markerPosition = new window.kakao.maps.LatLng(
          Number(props.address.place.lng),
          Number(props.address.place.lat)
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);

        const iwContent = `<div style="padding:5px;">
        ${props.address.place.placeName}
        </div>`;
        const iwPosition = new window.kakao.maps.LatLng(
          Number(props.address.place.lng),
          Number(props.address.place.lat)
        );

        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        });
        infowindow.open(map, marker);
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", borderRadius: "20px" }}
    ></div>
  );
}

// 스타일

import styled from "@emotion/styled";
import {
  SearchOutlined,
  CaretLeftFilled,
  CaretRightFilled,
} from "@ant-design/icons";

interface ISearchBarOpen {
  isOpen: boolean;
}

export const MapSection = styled.div`
  display: flex;
  #map {
    width: 920px;
    height: 600px;
    overflow: hidden;
    border-radius: 20px;
  }
  #menuDiv {
    display: flex;
    top: 10px;
    position: relative;
    z-index: 2;
    font-size: 12px;
    border-radius: 10px;
    left: ${(props: ISearchBarOpen) => (props.isOpen ? "-906px" : "-920px")};
  }

  #menu_wrap {
    position: relative;
    width: 400px;
    height: 580px;
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.7);
    display: ${(props: ISearchBarOpen) => (props.isOpen ? "" : "none")};
  }

  #map_title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  #form {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px 10px 15px;
  }

  #keyword {
    width: 100%;
    border: none;
    outline: none;
  }

  #submit_btn {
    background-color: #ff6e30;
    border: none;
    outline: none;
  }

  #placesList h5 {
    color: #ff6e30;
  }

  #placesList li {
    list-style: square;
  }
  #placesList .item {
    border-bottom: 1px solid #888;
    overflow: hidden;
    cursor: pointer;
  }

  #placesList .item .info {
    padding: 10px 0 10px 5px;
  }

  #placesList .item span {
    display: block;
    margin-top: 4px;
  }
  #placesList .info .gray {
    color: #8a8a8a;
  }

  #placesList .info .tel {
    color: #009900;
  }

  #btnDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #pagination {
    margin: 10px auto;
    text-align: center;
  }
  #pagination a {
    display: inline-block;
    margin-right: 10px;
    color: #7b7b7b;
  }
  #pagination .on {
    font-weight: bold;
    cursor: default;
    color: #ff6e30;
  }

  #searchBtn {
    width: 20px;
    padding: 0px;
    height: 70px;
    background-color: #ffa230;
    border: none;
    outline: none;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  color: #fff;
  cursor: pointer;
`;

export const LeftDisplayButton = styled(CaretLeftFilled)`
  color: #fff;
  cursor: pointer;
`;
export const RightDisplayButton = styled(CaretRightFilled)`
  color: #fff;
  cursor: pointer;
`;
