import React, { useEffect, useState } from 'react';
import styles from './Admin_start.module.css';

const Admin_start = ({socket})=>{
  const [players, setPlayers] = useState([]);
  useEffect(()=>{
    socket.on("player_joined", async msg=>{
      setPlayers(msg.players);
      console.log(msg.players);
    });
    console.log(players);
  });
  return(
    <div className={styles.Admin_start}>
      <h1>Das na Das na Jay Swaminarayan &#128583;</h1>
      <h2>Joined Players: </h2>
      <ul>{players.map(player=>{
        return (<li>{player}</li>)
      })}</ul>
      <button onClick={()=>console.log("Start game...")}>Start Quiz</button>
    </div>
  )
};

Admin_start.propTypes = {};

Admin_start.defaultProps = {};

export default Admin_start;
