import axios from "axios/index";
import {Notification, MessageBox} from 'element-ui';

export let request = axios.create({
    baseURL: 'https://iteastyle-api-test.aimeow.com/',
    timeout: 3000
});

export const qiniu_url = 'http://image.iteastyle.cn/'

export function getQiniuToken(TokenCallback) {
    request.get('/upload/getUploadToken', {})
        .then(function (response) {
            TokenCallback(response.data.model)
        })
}

export function createRequest(param, type) {
    return new Promise(((resolve, reject) =>  {
        request.post('/admin/create', {
            param: JSON.stringify(param),
            type: type
        }).then((response)=> {
            if (response.data.success) {
                resolve(response.data.model);
                showNotify('创建成功');
            } else {
                reject(response);
                showNotify('创建失败');
            }
        }).catch((response)=> {
            reject(response);
            showNotify('创建失败');
        })
    }));
}

export function updateRequest(param, type) {
    return new Promise(((resolve, reject) =>  {
        request.post('/admin/update', {
            param: JSON.stringify(param),
            type: type
        }).then((response)=> {
            if (response.data.success) {
                resolve(response.data.model);
                showNotify('修改成功');
            } else {
                reject(response);
                showNotify('修改失败');
            }
        }).catch((response)=> {
            reject(response);
            showNotify('修改失败');
        })
    }));
}

export function deleteRequest(id, type) {
    return new Promise(((resolve, reject) =>  {
        request.post('/admin/delete', {
            id: id,
            type: type
        }).then((response)=> {
            if (response.data.success) {
                resolve(response.data.model);
                showNotify('删除成功');
            } else {
                reject(response);
                showNotify('删除失败');
            }
        }).catch((response)=> {
            reject(response);
            showNotify('删除失败');
        })
    }));
}

export function getList(page, pageSize, type) {
    console.log(pageSize)
    return new Promise(((resolve, reject) =>  {
        request.get('/admin/getList', {
            params: {
                pageSize: pageSize,
                page: page,
                type: type
            }
        }).then((response)=> {
            console.log(response)
            if (response.data.success) {
                resolve(response.data.model);
            } else {
                reject(response);
            }
        }).catch((response)=> {
            reject(response);
        })
    }));
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
        }).then((value) => {
            resolve(value);
        }).catch(() => {
            reject();
        })
    })
}
