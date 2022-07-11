export const getDate = (date: Date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = newdate.getDate();
  return `${yyyy}년 ${mm}월 ${dd}일`;
};

export const getDateDot = (date: Date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};
export const getDate_ = (date: Date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const messageDate = (date: Date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  const hh = String(newdate.getHours()).padStart(2, "0");
  const min = String(newdate.getMinutes()).padStart(2, "0");
  const ss = String(newdate.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
};

export const timeForToday = (date: Date) => {
  const today = new Date();
  const timeValue = new Date(date);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return getDate(date);
};
