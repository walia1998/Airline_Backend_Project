const ClientErrorsCodes = Object.freeze({
  BAD_REQUEST : 400,
  UNAUTHORISED: 401,
  NOT_FOUND : 404,

});

const ServerErrorsCodes = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501,

});

const SucceedCodes = Object.freeze({
    OK : 200,
    CREATED: 201
});

module.exports = {
    ClientErrorsCodes,
    ServerErrorsCodes,
    SucceedCodes
}
