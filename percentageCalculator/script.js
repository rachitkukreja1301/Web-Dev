const calc = () =>{
    //getting marks
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let divison = "" ;
    // console.log(phy);
    
    //calculating percentage
    let totalMarks = parseFloat(wd) + parseFloat
    (maths) + parseFloat(comp) + parseFloat(phy);
    let perc = ( totalMarks / 400 ) * 100;
    // console.log(perc);

    alert(`app says total marks obtained 
    =${totalMarks}/400`);

    //showing grades
    if(perc <= 100 && perc >= 80){
        divison = 'First';
    }else if(perc >= 60 && perc <= 79) {
        divison = 'Second' ;
    }else if(perc >= 40 && perc <=59){
        divison = 'Third' ;
    } else {
        divison = 'Fourth' ;
    }
    document.getElementById('showData').innerHTML = `Out of 400, You Scored ${totalMarks} 
    and achieved ${divison} division ` ;
}