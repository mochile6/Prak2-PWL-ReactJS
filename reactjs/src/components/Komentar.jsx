import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./style";

const Komentar = () => {
  const classes = styles();

  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    comment: "",
  });

  //make state for counting comments
  const [countComment, setCountComment] = useState();

  //make state for users
  const [users, setUsers] = useState([]);

  //make function to getuser from api
  const getUsers = async () => {
    const response = await axios.get(
      "https://server-fahrisetiawan.herokuapp.com/api/komentars"
    );
    console.log(response.data);
    setCountComment(response.data.length);
    setUsers(response.data);
  };

  //make function to post comment
  const postComment = async (e) => {
    e.preventDefault();
    try {
      if (dataUser.name.length === 0) dataUser.name = "Anonymous";

      const response = await axios.post(
        "https://server-fahrisetiawan.herokuapp.com/api/komentars",
        dataUser
      );
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.boxComment}>
        <h2>Yang Punya Komentar/Pertanyaan Mohon Ditahan</h2>
        <div className={classes.formbody}>
          <form onSubmit={postComment} className={classes.form}>
            <input
              className={classes.input}
              type="text"
              placeholder="Name"
              value={dataUser.name}
              onChange={(e) => {
                setDataUser({ ...dataUser, name: e.target.value });
              }}
            />
            <input
              className={classes.input}
              type="email"
              placeholder="Email"
              value={dataUser.email}
              onChange={(e) => {
                setDataUser({ ...dataUser, email: e.target.value });
              }}
              required
            />
            <textarea
              className={classes.textarea}
              placeholder="Message"
              value={dataUser.comment}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  comment: e.target.value,
                });
              }}
              required
            />
            <button type="submit" className={classes.button}>
              Send
            </button>
          </form>
        </div>
        <div className={classes.commentbody}>
          <h4>{countComment} Comments</h4>
          {users.map((user) => (
            <div className={classes.comment}>
              <div className={classes.commentUser}>
                <img src="Anonim.png" alt="user" className={classes.userImg} />
                <div className={classes.userInfo}>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>
              <p>{user.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Komentar;
