document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('mytext');
    const initialPlaceholder = inputField.getAttribute('placeholder');
    const manytoonebtn = document.getElementById('manytoonebtn');
    const displayPara = document.getElementById('display');

    function remove(para) {
        setTimeout(() => {

            displayPara.removeChild(para);
            location.reload();
        }, 3000)

    }
    // function of the one to one 
    function manytoonefunction() {
        const inputvalue = inputField.value.trim();
        const numbers = inputvalue.split(',').map(num => parseInt(num.trim()));
        if (numbers.length > 4 || inputvalue === '') {
            const error = document.createElement('p');
            error.textContent = 'Enter 4 numbers of input eg(x=1, y=3)';
            displayPara.appendChild(error);
            remove(error);
        } else {
            const inputvalue = inputField.value.trim();
            const numbers = inputvalue.split(',').map(num => parseInt(num.trim()));
            [x1, y1, x2, x3] = numbers;
            
            
            const prompt = document.createElement("p");
            prompt.textContent = `
            f(${x1}) = ${y1}\n
            f(${x2}) = ${y1}\n
            f(${x3}) = ${y1}\n
            `;
            const output = document.createElement('p');
            output.textContent = `Its a function, also many-to-one `;
            displayPara.appendChild(output);
            displayPara.appendChild(prompt);

        }



    }

    manytoonebtn.onclick = manytoonefunction;



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