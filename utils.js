
export const finalNumber = () => {
    return Math.ceil(Math.random() * 20);
};
export const compareNumbers = (guess, correctNumber) => {
    if (guess === correctNumber){
        return 'You win!';
    } else if (guess < correctNumber){
        return 'Too low';
        
    } else {
        return 'Too high';

    }
};
