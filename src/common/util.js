import axios from "axios/index";

export let request = axios.create({
    baseURL: 'https://iteastyle-api-test.aimeow.com/',
    timeout: 3000
});

export function getQiniuToken(TokenCallback) {
    request.get('/upload/getUploadToken', {})
        .then(function (response) {
            TokenCallback(response.data.model)
        })
}
