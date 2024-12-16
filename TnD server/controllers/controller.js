const axios = require('axios');

const get_response = async (req,res)=>{
            const input = req.body.value;
            const rating = req.body.rating;
            if (input  === "truth"){
                const resp = await axios.get(`https://api.truthordarebot.xyz/v1/truth?rating=${rating}`);
                console.log(resp.data.question);
                res.send(resp.data.question);
                console.log(resp.data.rating);
                
            }
            else{
                const resp = await axios.get(`https://api.truthordarebot.xyz/api/dare?rating=${rating}`);
                console.log(resp.data.question);
                res.send(resp.data.question);
                console.log(resp.data.rating);
            }
}

module.exports = get_response;