const hello = () => {
  let nama = document.querySelector("#name").value;
  let alamat = document.querySelector("#alamat").value;
  document.querySelector("#address").innerHTML = alamat;
  document.querySelector("#name2").innerHTML = nama;
};
