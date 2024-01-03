document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('mytext');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const onetoonebtn = document.getElementById('onetooneBtn');
    const displayPara = document.getElementById('display');

    function remove(para) {
        setTimeout(() => {

            displayPara.removeChild(para);
            location.reload();
        }, 3000)

    }
    // function of the one to one 
    function onetooneFunction() {
        const inputvalue = inputField.value.trim();
        const numbers = inputvalue.split(',').map(num => parseInt(num.trim()));
        if (numbers.length > 8 || inputvalue === '') {
            const error = document.createElement('p');
            error.textContent = 'Enter 8 numbers of input eg(x=1, y=3)';
            displayPara.appendChild(error);
            remove(error);
        } else {
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num => parseInt(num.trim()));
            [x1, y1, x2, y2, x3, y3, x4, y4] = numbers;

            const prompt = document.createElement("p");
            prompt.textContent = `
            f(${x1}) = ${y1}\n
            f(${x2}) = ${y2}\n
            f(${x3}) = ${y3}\n
            f(${x4}) = ${y4}\n
            `;
            const output = document.createElement('p');
            output.textContent = `Its a function, also one-to-one `;
            
            displayPara.appendChild(prompt);
            displayPara.appendChild(output);
            
            if (y1 == y2 || y1 == y3 || y1 == y4) {
                const output = document.createElement('p');
                output.textContent = `Its neither a function nor one-to-one `;
                displayPara.appendChild(output);
                
            }
        }

    }

    onetoonebtn.onclick = onetooneFunction;

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