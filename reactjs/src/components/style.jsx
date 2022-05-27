import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  ul: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333333",
  },
  li: {
    float: "left",
  },
  link: {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none",
  },

  input: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    backgroundColor: "#4caf50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },

  userImg: {
    width: "5%",
    height: "5%",
  },

  formbody: {
    marginLeft: "30%",
    marginRight: "30%",
  },
  main: {
    backgroundImage: `url(${"Bg.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  },
  commentbody: {
    paddingBottom: "100px",
  },
});
export default styles;
