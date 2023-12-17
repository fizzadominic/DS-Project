// code for input search
document.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById('myInput');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const displayPara = document.getElementById('displayPrompt');
    const displaySequence = document.getElementById('displaySequence');
    
    // make changes here
    const NthTbn = document.getElementById('NthTbn'); // AP button
    const CDbtn  = document.getElementById('CDbtn');  // Common Difference
    const HSeries = document.getElementById('HSeries'); // sum of the nth term
    const SumBtn = document.getElementById('SumBtn');  // sum of last nth term when last is given
    const HPBtn = document.getElementById('HPBtn');  // sum of last nth term when last is given
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
                    const[a , n , d] = numbers;
                    let formula =( 1)/(a + (n-1) * d);
                 
                    const newLine = document.createElement('p');
                    newLine.textContent = `the nth term is : ${formula}`;
                    displayPara.appendChild(newLine);
                    

               }
               
            //    DeleteFunction.onclick = clear;
               console.log(inputvalue);
               inputField.value = '';
               restoreplaceholder();
               
        }
         
        //  to find the common difference 
        function commonDifference(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 2 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1/23, 1/34';
                para.textContent = message;
                remove(para);
                
            }else{
                const inputvalue = inputField.value.trim();
                const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                const[a1, a2] = numbers;
                let formula = a2+ a1/ a1*a2;
                const newLine = document.createElement('p');
                newLine.textContent = `the common difference is : ${formula}`;
                displayPara.appendChild(newLine);
                

           }

            inputField.value = '';
            restoreplaceholder();

       }
       // Sum of infinite nth terms
        function HarmonicSeries(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1/23, 2(common difference), 4(nth term)';
                para.textContent = message;
                remove(para);
                
            }else{

                const inputvalue = inputField.value.trim();
                const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                const[a, d,n] = numbers;
                let multiple = 0;
                let arr = [];
                for(let i=0; i<=n; i++){
                   let formula = 1/Math.round(a + multiple*d);
                   arr.push(`1/${formula}`);
                   multiple++;
                }
                const newLine = document.createElement('p');
                // newLine.textContent = `the harmonic series is : ${arr}`;
                displaySequence.textContent = 'the harmonic series is :' + arr.join(', ');
                displayPara.appendChild(newLine);
            }

            inputField.value = '';
            restoreplaceholder();
        }

        // 
        function SumOfseries(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 3 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg 1/23, 2(common difference), 4(nth term)';
                para.textContent = message;
                remove(para);
                
            }else{
                
                const inputvalue = inputField.value.trim();
                const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                const[a, d, n] = numbers;
                let formula = (1/ d) * Math.log((2*a+ (2*n-1)*d)/ (2*a-d)) ;
                const newLine = document.createElement('p');
                newLine.textContent = `the sum of series is: ${formula}`;
                displayPara.appendChild(newLine);
            }


            inputField.value = '';
            restoreplaceholder();
        }

         // generate GP
        function generateHP(){
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
            if(numbers.length > 2 || inputvalue === ''){
                const message = 'Enter two numbers seperated by comma eg: 1/2 , 4(n)';
                para.textContent = message;
                remove(para);
                
            }else{
                const inputvalue = inputField.value.trim();
                const numbers = inputvalue.split(',').map(num=>parseInt(num.trim()));
                const[a, n] = numbers;
                let multiple = 1;
                let arr = [];
                for(let i=1; i<=n; i++){
                   arr.push(`${a}/${a*i}`);
                   multiple++;
                }
                const newLine = document.createElement('p');
                // newLine.textContent = `the harmonic series is : ${arr}`;
                displaySequence.textContent = 'the harmonic series is :' + arr.join(', ');
                displayPara.appendChild(newLine);     
                }
                inputField.value = '';
                restoreplaceholder();
            }

        

    NthTbn.onclick = handleClick;
    CDbtn.onclick = commonDifference;
    HSeries.onclick = HarmonicSeries;
    SumBtn.onclick = SumOfseries; 
    HPBtn.onclick = generateHP;

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



