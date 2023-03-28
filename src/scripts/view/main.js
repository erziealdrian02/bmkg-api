const wilayahList = document.getElementById("wilayah-list");
fetch("https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((wilayah) => {
      const cuaca = wilayah.lat.toString().split(".")[0];

      let kondisiCuaca;
      if (cuaca <= 0) {
        kondisiCuaca = "Cerah";
      } else if (cuaca >= 1 && cuaca <= 2) {
        kondisiCuaca = "Cerah Berawan";
      } else if (cuaca == 3) {
        kondisiCuaca = "Berawan";
      } else if (cuaca == 4) {
        kondisiCuaca = "Berawan Tebal";
      } else if (cuaca >= 5 && cuaca < 10) {
        kondisiCuaca = "Berawan Tebal";
      } else if (cuaca >= 10 && cuaca < 45) {
        kondisiCuaca = "Asap";
      } else if (cuaca >= 45 && cuaca < 60) {
        kondisiCuaca = "Kabut";
      } else if (cuaca >= 60 && cuaca < 61) {
        kondisiCuaca = "Hujan Ringan";
      } else if (cuaca >= 63 && cuaca < 80) {
        kondisiCuaca = "Hujan Lokal";
      } else if (cuaca > 95) {
        kondisiCuaca = "Hujan Petir";
      } else {
        kondisiCuaca = "Tidak DIketahui";
      }

      console.log(wilayah);
      const card = document.createElement("div");
      card.className = "card";

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header";
      cardHeader.innerHTML = wilayah.propinsi;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.innerHTML =
        "<p>Kota : " +
        wilayah.kota +
        "</p>" +
        "<p>Kecamatan : " +
        wilayah.kecamatan +
        "</p>" +
        "<p>Kondisi : " +
        kondisiCuaca +
        "</p>";
      // cardBody.innerText = `Kecamatan: ${wilayah.kecamatan}\nKeterangan : ${kondisiCuaca}\n`;

      const cardBody2 = document.createElement("div");
      cardBody2.className = "card-body";
      cardBody2.innerHTML = "Kondisi : " + kondisiCuaca;

      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      wilayahList.appendChild(card);
    });
  })
  .catch((error) => console.error(error));
