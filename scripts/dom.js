

//make dom element

const domeditor = {

makedadintodom : function(dad) {

    console.log(dad);
    document.querySelector("#jokecontainer").innerHTML = `
    <h3>${dad.joke}</h3>`;

}

}

export default domeditor;