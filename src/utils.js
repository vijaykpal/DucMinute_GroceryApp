const validateMobileNumber = (number = '') => {
    let numberRegex = /^[0-9]+$/;
    return (number.length == 10 && number.charAt(0) > 5 && number.match(numberRegex) && number.match(numberRegex) != null);
};

export {
    validateMobileNumber
}