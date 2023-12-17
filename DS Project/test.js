function solveArithmeticSequence(sequence) {
    const numbers = sequence.split(',').map(num => parseInt(num.trim()));

    if (numbers.length < 3) {
        return 'Please provide at least three numbers separated by commas (e.g., 2, 4, 6)';
    }

    const commonDifference = numbers[1] - numbers[0];
    const expectedSequence = numbers.map((num, index) => numbers[0] + index * commonDifference);

    if (numbers.join(',') === expectedSequence.join(',')) {
        return `The given sequence "${sequence}" is an arithmetic sequence with a common difference of ${commonDifference}.`;
    } else {
        return `The given sequence "${sequence}" is not an arithmetic sequence.`;
    }
}

// Ask user for the arithmetic sequence
const userSequence = prompt('Enter an arithmetic sequence (e.g., 2, 4, 6):');

// Solve and display the result
const result = solveArithmeticSequence(userSequence);
console.log(result);