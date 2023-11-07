const fieldSets = document.querySelectorAll('.fieldset');
const sendBtn = document.querySelector('.send-msg');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const errorMsg = document.querySelector('.error');

//Accordion
for(const fieldSet of fieldSets){
    fieldSet.addEventListener('click', function(){
        fieldSet.classList.toggle('show');
    })
}
  //Backgrounds
function randomBackrounds(){
const fileNames = ['linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),url("./images/hero-2.jpg")',
'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./images/hero-3.jpg")',
 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./images/hero-4.jpg")', 
 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./images/hero-5.jpg")', 
 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./images/hero-6.jpg")'];

const section = document.querySelector('.hero-section');
const randomIndex= Math.floor(Math.random()* fileNames.length);
const randomImages =fileNames[randomIndex];
section.style.backgroundImage = randomImages;
}

setInterval(randomBackrounds, 3000);

//Error message for input fields
sendBtn.addEventListener('click', function(){   
    for(const input of inputs) {
        if(!input.value && !textArea.value){
            input.style.outline ="1px solid #f00";
            textArea.style.outline ="1px solid #f00";
            errorMsg.classList.remove('hide');
            errorMsg.style.color = "#f00"
              
        }else{
           input.style.outline = " "; 
        }
    }
      
});
 
    

