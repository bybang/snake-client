// USER INPUT
// Stores the active TCP connection object.
let connection;

const handleUserInput = (data) => {
  console.log("Key pressed: ", data);
  //process.stdout.write()
  if (data === 'w') {
    connection.write("Move: up")
  } else if (data === 's') {
    connection.write("Move: down")
  } else if (data === 'a') {
    connection.write("Move: left")
  } else if (data === 'd') {
    connection.write("Move: right")
  }
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'v') {
    connection.write("Say: HOLA")
  }
}

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

module.exports = {setupInput};