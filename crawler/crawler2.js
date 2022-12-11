const axios=require('axios');


try{
    (async ()=>{
        let crawler = await axios.get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211');
        console.log(crawler.data);
    })();
}catch(err){
    console.log(err);
}
