import axios from "axios/index";
import {Notification, MessageBox} from 'element-ui';

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

export function showNotify(content) {
    Notification({
        title: '提示',
        message: content
    })
}

export function showAlert(content) {
    return new Promise(function (resolve, reject) {
        MessageBox.confirm(content, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
        }).then(() => {
            resolve();
        }).catch(() => {
            reject();
        })
    })
}
