const {getData,getRaw}=require('./utils');
function processData(){
    return `Processed:${getData()}`;
}
function processRaw(){
    return getRaw();
}

module.exports={processData,processRaw};