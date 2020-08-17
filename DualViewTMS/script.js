

let urlArray=[];
let iframe = document.getElementById("sggk");
let folio = document.getElementById("msSggk");
let folioNbr = 0;
let page = 1;
function lastPage(){
    if(page == 1 && folioNbr == 0){
    }
    else{
        let section = iframe.contentWindow.document.getElementsByTagName("DIV")[page];
        section.style.display ="none";
        page--;
        section = iframe.contentWindow.document.getElementsByTagName("DIV")[page];
        section.style.display = "block";
        folioNbr--;
        folio.src = "images/folio_"+ folioNbr + ".jpg";
    }
}
function nextPage(){
    if(page == 15){
    }
    else{
        let section = iframe.contentWindow.document.getElementsByTagName("DIV")[page];
        section.style.display ="none";
        page++;
        section = iframe.contentWindow.document.getElementsByTagName("DIV")[page];
        section.style.display = "block";
        folioNbr++;
        folio.src = "images/folio_"+ folioNbr + ".jpg";
    }
    
}
