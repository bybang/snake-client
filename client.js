const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write('Name: JYB');
    //setInterval(() => {
    //  conn.write(move[0]);
    //}, 50)
    //setInterval(() => {
    //  conn.write("Move: left");
    //}, 100)
  })
  conn.on("data", (data) => {
    console.log(data)
  })
  conn.on("end", () => {
    process.exit();
  })
  //conn.on("connect", () => {
  //  console.log('successfully connected!')
  //  // code that does something when the connection is first established
  //})

  return conn;
};

module.exports = {connect};