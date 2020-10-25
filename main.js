const  {exec}  = require('child_process')
const fs = require('fs');
const cron = require('node-cron');

let dayCnt = 2;

cron.schedule('* * * * * *', () => {
    dayCnt++;
    fs.appendFile('main.js', `//Day ${dayCnt}\n`, (err) => {
	if (err)
	    throw err;
	else{
	    exec('git add . ', (error,stdout,stderr) =>{
		if(error){
		    console.log(`Day${dayCnt}: ${stderr}`);
		    return;
		}else{
		    exec('git commit -m Day:${dayCnt}', (error,stdout,stderr) =>{
			if(error){
			    console.log(`Day${dayCnt}:error: ${stderr}`);
			    return;
			}else{
		            exec('git push origin master', (error,stdout,stderr) =>{
				if(error){
				    console.log(`Day${dayCnt}:error: ${stderr}`);
				    return;
				}else{
				    console.log(`Day${dayCnt}:success: You did it also today.  Good Job.`);
				}
			    })
			}
		    })
		}
	    })
	}
    });
});
//Day 2
//Day 3//Day 4//Day 5//Day 6//Day 7//Day 8//Day 9//Day 10//Day 11
//Day 3
//Day 4
//Day 5
//Day 6
//Day 7
//Day 8
//Day 9
