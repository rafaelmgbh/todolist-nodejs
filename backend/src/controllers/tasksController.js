
const getAll = (request,response) => { 
    return response.status(200).json({message: 'Ola mundao'});
};

module.exports = {
    getAll,
}