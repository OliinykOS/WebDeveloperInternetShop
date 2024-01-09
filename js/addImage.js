
let imgConteiner0 = document.querySelector(".column0");
let imgConteiner1 = document.querySelector(".column1");
let imgConteiner2 = document.querySelector(".column2");
let imgConteiner3 = document.querySelector(".column3");
let downloadButton = document.querySelector(".addImgBtn");
let counter = 0;

   
function downloadImage(input){
    counter++;
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        let link = document.createElement('a');
               
        const linkAtt = document.createAttribute("href")
        linkAtt.value = reader.result;
        link.setAttributeNode(linkAtt);

        const dataAtt1 = document.createAttribute("data-fancybox")
        dataAtt1.value = "gallery";
        link.setAttributeNode(dataAtt1);

        const dataAtt2 = document.createAttribute("data-caption")
        dataAtt2.value = `Caption #${counter}`;
        link.setAttributeNode(dataAtt2);


        link.innerHTML = img.outerHTML;

        if(counter%4 == 1){
            imgConteiner0.appendChild(link);
        }else if (counter%4 == 2){
            imgConteiner1.appendChild(link);
        }else if (counter%4 == 3){
            imgConteiner2.appendChild(link);
        }else {
            imgConteiner3.appendChild(link);
        }
        
    }

    

    if(counter >= 10){
        const hideAtt = document.createAttribute("style");
        hideAtt.value = "display: none"
        downloadButton.setAttributeNode(hideAtt)
    }

}