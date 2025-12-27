const Log=require("../model/log");
const ErrorSignature=require("../model/errorSignature");
const generateHash=require("../utils/hash");

async function processLogs(){
    const logs=await Log.find({parsedHash:{$exist:false}});

    for(let log of logs){
        const hash=generateHash(log);

        await ErrorSignature.findOneAndUpdate(
            {hash},
            {
                $setOnInsert:{
                    service:log.service,
                    message:log.message,
                    stackSample:log.stack,
                    firstSeen:log.timestamp,
                    severity:log.severity
                },
                $set:{
                    lastSeen:log.timestamp
                },
                $inc:{
                    count:1
                }
            },
            {upsert:true}
        )

        log.parsedHash=hash;
        await log.save();
    }
}

module.exports=processLogs;