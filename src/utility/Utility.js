const getApp = () => {
  const getedData = localStorage.getItem("appData");

  if (getedData) {
    const paeseDAta = JSON.parse(getedData);

    return paeseDAta;
  } else {
    return [];
  }
};

const setApp = (id) => {
  const parseDAta = getApp();

  if (parseDAta.includes(id)) {
    alert("gsyuguy");
  } else {
    parseDAta.push(id);
    const data = JSON.stringify(parseDAta);
    localStorage.setItem("appData", data);
  }
};
export { setApp, getApp };
