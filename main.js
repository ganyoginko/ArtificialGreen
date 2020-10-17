const  {exec}  = require('child_process')
const fs = require('fs');
const cron = require('node-cron');

let dayCnt = 0;

cron.schedule('0 0 8 * * *', () => {
    dayCnt++;
    fs.appendFile('main.js', `//Day ${dayCnt}`, (err) => {
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
