import React from "react";
import { createUseStyles } from "react-jss";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.body}>
        <h1 className={classes.nama}>Selamat Datang Di Website Cuma Cuma</h1>
        <h1 className={classes.nama}>Fahri Setiawan</h1>
        <img src="PesanGambar.png" alt="hello" className={classes.bebek} />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  bebek: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    objectPosition: "center",
    marginTop: "20px",
  },
  body: {
    paddingTop: "100px",
  },

  nama: {
    fontFamily: "Lobster",
    size: "50px",
    padding: "20px",
  },
  Biodata: {
    backgroundColor: "white",
    color: "black",
    padding: "5px",
    borderCollapse: "collapse",
    marginLeft: "20%",
    marginRight: "20%",
  },
  main: {
    backgroundImage: `url(${"Bg.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  },
});
export default Home;
