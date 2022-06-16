exports.createUser = (req, res, next) => {
    const userBody = req.body;

    // TODO: add integration with database
    res.status(200).send({
        message: `User was created with id:{1}`,
    });
};

exports.getUserById = (req, res, next) => {
    
};

exports.updateUser = (req, res, next) => {

};