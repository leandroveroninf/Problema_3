const Password = require("./src/class/Password");
const pass = "Leandroveron1234@gmail_com";


const classPass = new Password(pass);

console.log(classPass.passMaxSeguridad(pass));


