// code for input search
document.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById('myInput');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const displayPara = document.getElementById('displayPrompt');
    const displaySequence = document.getElementById('displaySequence');
    
    // make changes here
    const NthTbn = document.getElementById('NthTbn'); // AP butto;
    const para = document.getElementById('error');

    
    function remove(para){
        setTimeout(()=>{

            displayPara.removeChild(para);
            location.reload();

        }, 3000)
    }
    
       // function of Airthematic Sequence 
        function handleClick(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 1 || inputvalue === ''){
                    const message = 'Enter limit of the sequence eg: 4 or 5 or n > 2';
                    para.textContent = message;
                    remove(para);
                    
                }else{
                    const inputvalue = inputField.value.trim();
                    const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                    const[n] = numbers;
                    let arr = [0,1];
                    for(let i=2; i< n; i++){
                        let nextFeb = arr[i-1] + arr[i-2];
                       arr.push(nextFeb);
                    }
                    const newLine = document.createElement('p');
                    newLine.textContent = `the febonacci series: ${arr}`;
                    displayPara.appendChild(newLine);
                    

               }
               
            //    DeleteFunction.onclick = clear;
               console.log(inputvalue);
               inputField.value = '';
               restoreplaceholder();
               
        }
         
        
     

        

    NthTbn.onclick = handleClick;
 

    inputField.addEventListener('input', function(){
        inputField.removeAttribute('placeholder');
        
    });
    inputField.addEventListener('keyup', function(event){
        const inputValue = inputField.value.trim();
        if(inputValue === ''){
            restoreplaceholder();
        }

    });

    function restoreplaceholder(){
        inputField.setAttribute('placeholder', initialPlaceholder);
    }

});



