const Password = require("./src/class/Password");
const pass = "Leandro_veron$1234";


const classPass = new Password(pass);

console.log(classPass.passMaxSeguridad(pass));


