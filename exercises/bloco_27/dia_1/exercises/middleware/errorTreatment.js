const errorTreatment = (err, req, res, _next) => {
    console.log(err)
    if(err.status) return res.status(err.status).json( err );

    if(err.isJoi) return res.status(400).json({ message: err.details[0].message });

    console.error(err);

    return res.staus(500).json({ message: "Internal Server Error" });
};

module.exports = {
    errorTreatment,
};