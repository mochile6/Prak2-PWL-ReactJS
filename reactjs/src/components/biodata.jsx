import React from "react";
import { createUseStyles } from "react-jss";

const Biodata = () => {
  const classes = useStyles();
  return (
    <div className={classes.Biodata} id="biodata">
      <table class="tabeldiri">
        <tr>
          <td rowspan="15" width="250px">
            <img src="../../public/logo192.png" width="250px" height="420px" />
          </td>
        </tr>
        <tr>
          <td>
            <b>Nama Lengkap</b>
          </td>
          <td>:</td>
          <td>Fahri Setiawan</td>
        </tr>
        <tr>
          <td>
            <b>Nama Panggilan</b>
          </td>
          <td>:</td>
          <td>Fahrenheit</td>
        </tr>
        <tr>
          <td>
            <b>Tempat, Tanggal Lahir</b>
          </td>
          <td>:</td>
          <td>WayKanan, 18 Januari 2001</td>
        </tr>
        <tr>
          <td>
            <b>Umur</b>
          </td>
          <td>:</td>
          <td>20 Tahun</td>
        </tr>
        <tr>
          <td>
            <b>Jenis Kelamin</b>
          </td>
          <td>:</td>
          <td>Laki - Laki</td>
        </tr>
        <tr>
          <td>
            <b>Gol. Darah</b>
          </td>
          <td>:</td>
          <td>O</td>
        </tr>
        <tr>
          <td>
            <b>Agama</b>
          </td>
          <td>:</td>
          <td>Islam</td>
        </tr>
        <tr>
          <td>
            <b>Alamat</b>
          </td>
          <td>:</td>
          <td>Tiuh Balak Pasar , Baradatu , WayKanan</td>
        </tr>
        <tr>
          <td>
            <b>Pekerjaan</b>
          </td>
          <td>:</td>
          <td>Mahasiswa</td>
        </tr>
        <tr>
          <td>
            <b>Kewarganegaraan</b>
          </td>
          <td>:</td>
          <td>Indonesia</td>
        </tr>
      </table>
    </div>
  );
};

const useStyles = createUseStyles({
  Biodata: {
    // backgroundColor: rgba(199, 173, 173, 0.418),
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    padding: "5px",
    borderCollapse: "collapse",
  },
});

export default Biodata;
