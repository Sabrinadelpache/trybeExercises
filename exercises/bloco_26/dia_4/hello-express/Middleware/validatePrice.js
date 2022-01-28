const validatePrice = (req, res, next) => {
    const { price } = req.body;
  
    if(!price || typeof price === Number || price === 0) return res.status(400).json({message: 'O campo "price" é inválido'});
    const priceB = price + 40;
    next();
  };
  

  module.exports = validatePrice;