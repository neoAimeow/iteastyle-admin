function getQiniuToken(TokenCallback) {
    this.$ajax.get('/upload/getUploadToken', {})
        .then(function (response) {
            TokenCallback(response.data.model)
        })
}

module.exports = {
    getQiniuToken
}