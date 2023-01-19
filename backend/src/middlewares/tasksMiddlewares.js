const validateBody = (request, response, next) => {
    const { body } = request;

    if(body.title === undefined || body.title === '') {
        return response.status(400).json({ message: 'Titulo e obrigatório' });
    }

    next();
    
};

module.exports = {
    validateBody,
};