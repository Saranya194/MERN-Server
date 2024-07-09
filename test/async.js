function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}        //calls admin after 4 seconds


function Mydata(callback){
    setTimeout(()=>{
        callback({id:10001});
    },3000);
}

module.exports={fetchData,Mydata};