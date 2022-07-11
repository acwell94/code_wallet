// 컨테이너

import { MouseEvent, useState } from "react";
import PaginationPresenter from "./Pagination.presenter";
import { IFreeBoardPresenter } from "./Pagination.types";

function PaginationContainer(props: IFreeBoardPresenter) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = props.totalItemCount
    ? Math.ceil(props.totalItemCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivePage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivePage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <PaginationPresenter
      startPage={startPage}
      activePage={activePage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
// 프레젠터
export default PaginationContainer;

import * as S from "./Pagination.styles";
import { v4 as uuidv4 } from "uuid";
import { IPaginationContainer } from "./Pagination.types";
function PaginationPresenter(props: IPaginationContainer) {
  return (
    <S.Main>
      <S.PageNationSection>
        <S.PageNextArticle onClick={props.onClickPrevPage}>◀</S.PageNextArticle>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <S.PageNumberArticle
                key={uuidv4()}
                onClick={props.onClickPage}
                id={String(props.startPage + index)}
                isActive={props.startPage + index === props.activePage}
              >
                {props.startPage + index}
              </S.PageNumberArticle>
            )
        )}
        <S.PageNextArticle onClick={props.onClickNextPage}>▶</S.PageNextArticle>
      </S.PageNationSection>
    </S.Main>
  );
}

export default PaginationPresenter;
