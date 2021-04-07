const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first= readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

// console.log(first,second)
// console.log(__filename)

writeFileSync('./content/result-sync.txt',
	`\n Here is the result: ${first} , ${second}`,
	{flag:'a'}
	)
console.log('Done with this one')
console.log('starting the next one')
