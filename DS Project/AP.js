// code for input search
document.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById('myInput');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const NthTbn = document.getElementById('NthTbn'); // AP button
    const CDbtn  = document.getElementById('CDbtn');  // Common Difference
    const NthBtn = document.getElementById('NthBtn'); // sum of the nth term
    const lastTerm = document.getElementById('lastTerm');  // sum of last nth term when last is given
    const displayPara = document.getElementById('displayPrompt');
    const para = document.getElementById('error');
    // const DeleteFunction = document.getElementById('delete');
    
    function remove(para){
        setTimeout(()=>{

            displayPara.removeChild(para);
            location.reload();

        }, 3000)
    }
    
       // function of Airthematic Sequence 
        function NthTerm(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                    const message = 'Enter three numbers seperated by comma eg 1,2,3';
                    para.textContent = message;
                    remove(para);
                    
                }else{
                    const inputvalue = inputField.value.trim();
                    const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                    const[a , n , d] = numbers;
                    let formula = (a + (n-1) * d);
                 
                    const newLine = document.createElement('p');
                    newLine.textContent = `the nth term is : ${formula}`;
                    displayPara.appendChild(newLine);
                    

               }
               
            //    DeleteFunction.onclick = clear;
               console.log(inputvalue);
               inputField.value = '';
               restoreplaceholder();
               
        }
         
        //  to find the common Difference 
        function commonDifference(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 2 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1,2';
                para.textContent = message;
                remove(para);
            }else{
                const inputvalue = inputField.value.trim();
                    const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                    const[a1, a2] = numbers;
                    let formula = (a2 - a1);
                 
                    const newLine = document.createElement('p');
                    newLine.textContent = `common difference is : ${formula}`;
                    displayPara.appendChild(newLine);

            }

            inputField.value = '';
            restoreplaceholder();

       }
       // Sum of first nth terms
        function SumOftheFirstNthTerms(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1,2,3';
                para.textContent = message;
                remove(para);
            }else{
                const inputvalue = inputField.value.trim();
                    const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                    const[a, n, d] = numbers;
                    let formula = ((n/2)*(2*a +(n-1)*d));
                 
                    const newLine = document.createElement('p');
                    newLine.textContent = `the sum of nth term is : ${formula}`;
                    displayPara.appendChild(newLine);

            }

            inputField.value = '';
            restoreplaceholder();

        
        }

        // sum of nth term when last is given
        function lastTermisgiven(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter three numbers seperated by comma eg 1,2,3';
                para.textContent = message;
                remove(para);
            }else{
                const inputvalue = inputField.value.trim();
                    const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                    const[a, b, n] = numbers;
                    let formula = ((n/2)*(a+b));
                 
                    const newLine = document.createElement('p');
                    newLine.textContent = `the sum of nth term is when last is given : ${formula}`;
                    displayPara.appendChild(newLine);

            }

            inputField.value = '';
            restoreplaceholder();
        }

    NthTbn.onclick = NthTerm;
    CDbtn.onclick = commonDifference;
    NthBtn.onclick = SumOftheFirstNthTerms;
    lastTerm.onclick = lastTermisgiven; 

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



