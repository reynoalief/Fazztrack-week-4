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
    fetch(`https://jsonplaceholder.typicode.com/${ep}`)
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
