const fetcher = async (method, ep) => {
  // ep = endpoint
  if (method == "GET") {
    const result = await getData(ep); //✅
    return result;
  } else if (method == "POST") {
    postData(ep); //✅
  } else {
    deleteData(ep); //✅
  }
};

const getData = (ep) => {
  return new Promise((resolve, reject) => {
    fetch(`https://63a3cf7a471b38b206167e71.mockapi.io/${ep}`)
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const deleteData = (id) => {
  if (confirm("Are You Sure?")) {
    fetch(`https://63a3cf7a471b38b206167e71.mockapi.io/vaccine/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => {
        // alert("data berhasil dihapus")
        window.location.reload();
      })
      .catch((err) => console.error(err));
  } else {
    alert("Done");
  }
};
