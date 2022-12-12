const getQuote = async () => {
    
    let data = "";
    const quote = document.getElementById("quotes");
    const author = document.getElementById("author");
    const genNewQuote = document.getElementById("genQuote");

    const getNewQuote = () => {
    let rnum = Math.floor(Math.random() * 1000);
    console.log(rnum);    
    // console.log(data[rnum].author);
    // console.log(data[rnum].text);
    
    quote.innerText = `" ${data[rnum].text} "` ;
    if(data[rnum].author == null){
        author.innerText = `~ Unknown` ;
    }else{
    author.innerText = `~ ${data[rnum].author}`;
    }
    }
    
    try {
        const api = await fetch("https://type.fit/api/quotes");
        data = await api.json();
        // console.log(data[0].author);
        getNewQuote();
    } catch (error) {
        
    }
    genNewQuote.addEventListener("click", getNewQuote);
};
getQuote();