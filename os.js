const os = require("os");
/*console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());*/
const arraydeobjetos = {
  os: os.platform(),
  version: os.release(),
  totalMemory: os.totalmem(),
};
console.table(arraydeobjetos);//console.table espera un array de objetos!!
