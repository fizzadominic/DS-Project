document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('mytext');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const bijecitvebtn = document.getElementById('bijecitvebtn');
    const displayPara = document.getElementById('display');

    function remove(para) {
        setTimeout(() => {

            displayPara.removeChild(para);
            location.reload();
        }, 3000)

    }
    // function of the one to one 
    function bijectiveFunction() {
        const inputvalue = inputField.value.trim();
        const numbers = inputvalue.split(',').map(num => parseInt(num.trim()));
        if (numbers.length > 10 || inputvalue === '') {
            const error = document.createElement('p');
            error.textContent = 'Enter 4 numbers of input eg(x=1, y=3)';
            displayPara.appendChild(error);
            remove(error);
        } else {
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num => parseInt(num.trim()));
            [x1, y1, x2, y2,x3,y3,x4,y4] = numbers;
            
            
            const prompt = document.createElement("p");
            prompt.textContent = `
            f(${x1}) = ${y1}\n
            f(${x2}) = ${y1}\n
            f(${x3}) = ${y1}\n
            f(${x3}) = ${y1}\n
            `;
            
            const output = document.createElement('p');
            
            if (y1 == y2 || y1 == y3 || y1 == y4) {
                output.textContent = `It's neither a function nor bijective`;
                
            }else if(y1 == '' || y2 == '' || y3 == ''){
                output.textContent = `It's neither a function nor bijective`;
               
            }else {
                output.textContent = `It's neither a function nor bijective`;
              
            }
            
            displayPara.appendChild(prompt);
            displayPara.appendChild(output);
        }



    }

    bijecitvebtn.onclick = bijectiveFunction;



    inputField.addEventListener('input', function() {
        inputField.removeAttribute('placeholder');

    });
    inputField.addEventListener('keyup', function(event) {
        const inputValue = inputField.value.trim();
        if (inputValue === '') {
            restoreplaceholder();
        }

    });

    function restoreplaceholder() {
        inputField.setAttribute('placeholder', initialPlaceholder);
    }





})