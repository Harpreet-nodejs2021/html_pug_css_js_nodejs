const revenue = 50;

const priceCalculation = function(price){
    return price * revenue;
};

module.exports = priceCalculation; // This function is now available outside this JS file using keyword "module.exports"