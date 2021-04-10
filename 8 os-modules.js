const os = require('os')

//info about current user
const user=os.userInfo()
// console.log(user)


//method returns the system uptime in seconds
// const sec=os.uptime()
// const min=sec/60
// const hour=min/60
// const day=hour/24
// console.log(`The System Uptime is ${day} day`);
const currentOs={
	name:os.type(),
	release:os.release(),
	totalMem:os.totalmem(),
	freeMem:os.freemem()
}
console.log(`free memoryis ${(((currentOs.freeMem)/1024)/1024)/1024} GB`)