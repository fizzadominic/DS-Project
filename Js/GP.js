// code for input search
document.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById('myInput');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const displayPara = document.getElementById('displayPrompt');
    const displaySequence = document.getElementById('displaySequence');
    
    // make changes here
    const NthTbn = document.getElementById('NthTbn'); // AP button
    const CRbtn  = document.getElementById('CRbtn');  // Common Difference
    const FiniteBtn = document.getElementById('FiniteBtn'); // sum of the nth term
    const infiniteBtn = document.getElementById('infiniteBtn');  // sum of last nth term when last is given
    const GPBtn = document.getElementById('GPBtn');  // sum of last nth term when last is given
    const para = document.getElementById('error');


    // const DeleteFunction = document.getElementById('delete');
    
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
            if(numbers.length > 3 || inputvalue === ''){
                    const message = 'Enter three numbers seperated by comma eg 1,2,3';
                    para.textContent = message;
                    remove(para);
                    
                }else{
                    const inputvalue = inputField.value.trim();
                    const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                    const[a , n , r] = numbers;
                    let N = n-1
                    let solveR = Math.pow(r, N);
                    let formula = a * solveR;
                    
                    const formulaTOshow = document.createElement('p');
                    formulaTOshow.textContent = `Formula : an = ar^n-1`;

                    const enteredPrompt = document.createElement('p');
                    enteredPrompt.textContent = `your prompt: ${numbers}`;

                    const solution = document.createElement('p');
                    solution.textContent = `an = ${a} * ${r} raised to the power ${r}- 1`  
                 
                    const newLine = document.createElement('p');
                    newLine.textContent = `the nth term is : ${formula}`;

                    displayPara.appendChild(enteredPrompt); 
                    displayPara.appendChild(formulaTOshow);
                    displayPara.appendChild(solution);
                    displayPara.appendChild(newLine);

                    

               }
               
            //    DeleteFunction.onclick = clear;
               console.log(inputvalue);
               inputField.value = '';
               restoreplaceholder();
               
        }
         
        //  to find the common ratio 
        function commonRatio(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1/23, 1/34';
                para.textContent = message;
                remove(para);
                
            }else{
                const inputvalue = inputField.value.trim();
                const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                const[a1, a2] = numbers;
                let formula = a2/a1;

                const formulaTOshow = document.createElement('p');
                formulaTOshow.textContent = `Formula : a2/a1`;

                const enteredPrompt = document.createElement('p');
                enteredPrompt.textContent = `your prompt:  a1 = ${a1}, a2 = ${a2}`; 

                const newLine = document.createElement('p');
                newLine.textContent = `the common ratio is : ${formula}`;

                displayPara.appendChild(formulaTOshow);
                displayPara.appendChild(enteredPrompt);
                displayPara.appendChild(newLine);
                

           }

            inputField.value = '';
            restoreplaceholder();

       }
       // Sum of finite nth terms
        function SumOftheFinite(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            const[a,r,n] = numbers;
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 4, 4,2';
                para.textContent = message;
                remove(para);
                
            }else{

                if( r > 1){
                    let power = Math.pow(r, n);
                    let second = 1 - power;
                    let R = 1-r;

                    let formula = (a*second )/ (R);
            
                    const formulaTOshow = document.createElement('p');
                    formulaTOshow.textContent = `Formula : a*(1-r power n)/ 1-r`;

                    const enteredPrompt = document.createElement('p');
                    enteredPrompt.textContent = `your prompt:  a = ${a}, r = ${r}, n = ${n}`; 

                    const newLine = document.createElement('p');
                    newLine.textContent = `Sum of nth term of a finite geometric sequence : ${formula}`;

                    displayPara.appendChild(formulaTOshow);
                    displayPara.appendChild(enteredPrompt);
                    displayPara.appendChild(newLine);

                }else if(r !==1 || r > 1){
                    let power = Math.pow(r, n);
                    let second = power - 1;
                    let R = r-1;
                    let formula = a* second/ R;

                    const formulaTOshow = document.createElement('p');
                    formulaTOshow.textContent = `Formula : a*(r power n -1 )/ r-1`;

                    const enteredPrompt = document.createElement('p');
                    enteredPrompt.textContent = `your prompt:  a = ${a}, r = ${r}, n = ${n}`; 

                    const newLine = document.createElement('p');
                    newLine.textContent = `Sum of nth term of a finite geometric sequence : ${formula}`;

                    displayPara.appendChild(enteredPrompt);
                    displayPara.appendChild(formulaTOshow);
                    displayPara.appendChild(newLine);
                }
                else{
                    newLine.textContent = `Check your prompt`;
                }
            }

            inputField.value = '';
            restoreplaceholder();
        }

         // Sum of infinite nth terms
        function sumOfInfinite(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            const[a,r ] = numbers;

            if(numbers.length > 2 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1/23, 1/34';
                para.textContent = message;
                remove(para);
                
            }else{
                
                
                    let R = 1-r;
                    let formula = a/ R;
                    const formulaTOshow = document.createElement('p');
                    formulaTOshow.textContent = `Formula : a/ 1 - r`;

                    const enteredPrompt = document.createElement('p');
                    enteredPrompt.textContent = `your prompt:  a = ${a}, r = ${r}`; 

                    const newLine = document.createElement('p');
                    newLine.textContent = `Sum of nth term of a finite geometric sequence : ${formula}`;

                    displayPara.appendChild(enteredPrompt);
                    displayPara.appendChild(formulaTOshow);
                    displayPara.appendChild(newLine);
                    
                
                
            }


            inputField.value = '';
            restoreplaceholder();
        }

         // generate GP
        function generateGP(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg: 1,2,3';
                para.textContent = message;
                remove(para);
                
            }else{
                    const inputvalue = inputField.value.trim();
                        const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                        const[a,  r , n] = numbers;
                        let formula;
                        let firstTerm = a;
                        let commonratio = r;
                        let nthTerm = n;
                        let arr = [];
                        let power = 1;
                        let ratio;
                        for(let i=0 ; i<= nthTerm; i++){
                             ratio = Math.pow(commonratio,power);
                            formula =  firstTerm*ratio;
                            arr.push(formula);
                            power++;
                        }
                        console.log(arr);
                        // const newLine = document.createElement('p');
                        // newLine.textContent = `the generated sequence is : ${arr.join(', ')}`;
                        displaySequence.textContent = 'the generated sequence is :' + arr.join(', ');
                        displayPara.appendChild(newLine);       
                }
                inputField.value = '';
                restoreplaceholder();
            }

        

    NthTbn.onclick = handleClick;
    CRbtn.onclick = commonRatio;
    FiniteBtn.onclick = SumOftheFinite;
    infiniteBtn.onclick = sumOfInfinite; 
    GPBtn.onclick = generateGP;

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



