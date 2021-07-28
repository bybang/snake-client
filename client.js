const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log('successfully connected!')
    // code that does something when the connection is first established
  })

  return conn;
};

module.exports = {connect};