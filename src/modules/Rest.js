const Url = "https://foo-bar-managers.herokuapp.com/";
export function getData(callback1, callback2) {
  fetch(Url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
      else console.log("GET failed!");
    })
    .then((data) => {
      callback1(data);
      const updatedData=[];

        data.taps.forEach((item) => {
          if(updatedData.filter(i=>i.name===item.beer).length===0){
            updatedData.push({
                name: item.beer,
                amount: 0,
                isStar: false,
              })
          }}
          );
      console.log(updatedData, "x");
      callback2(updatedData);
    });
}

export function postOrder(payload, callback) {
  fetch("https://foo-bar-managers.herokuapp.com/order", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then(data=> console.log(data))
    .then((response) => callback());
}

export function getBeers(callback) {
  fetch(Url + "beertypes", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
      else console.log("GET failed!");
    })
    .then((data) => callback(data));
}
