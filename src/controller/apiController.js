const httpStatus = require('http-status');
const apiService = require('../services/apiService')


const postApi = async ( req, res, next ) => {
   
    try {
        const data = await apiService.postApi(req.body)
        return  res.status(httpStatus.OK).send( data )
    } catch ( error ) {
        next( error );
    }
}

module.exports = { postApi }