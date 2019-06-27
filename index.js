if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/react-watermarks.min.js')
}else{
    module.exports = require('./dist/react-watermarks.js')
}