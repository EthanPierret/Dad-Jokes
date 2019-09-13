// get dad joke

const dadhandler = {

makedadjoke : function() {

    return fetch(`https://icanhazdadjoke.com/`,  { 
    headers: {
        'Accept': 'application/json'
            }
        }
            
    ).then(rawdata => rawdata.json())
    
}

}

export default dadhandler;