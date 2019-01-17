<template>
    <div class="news-manager-container">
        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            新闻中心
        </div>

        <router-link
                :to="{path: '/site-manager/news-center/update-news',query: {type:'create'}}" style="color:white;">
            <a class="button is-info is-active" style="  margin-top: 30px;margin-left:30px;width: 90px;">新增</a>
        </router-link>

        <el-table :data="posts" style="width:96%;margin-left:2%;margin-top:20px;">
            <el-table-column label="创建时间" width="160">
                <template slot-scope="scope">
                    <span>{{ scope.row.gmtCreate | dateFormat("YYYY-MM-DD HH:mm")  }}</span>
                </template>
            </el-table-column>
            <el-table-column label="产品展示ID" width="240">
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>

            <el-table-column label="产品标题">
                <template slot-scope="scope">
                    <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                    <a class="button is-info is-active">
                        <router-link
                                :to="{path: '/site-manager/news-center/update-news',query: {id:scope.row.id, type:'update'}}"
                                style="color:white;">编辑
                        </router-link>
                    </a>
                    <a class="button is-danger is-active" @click="deleteButtonClicked(scope.row.id)">删除</a>
                </template>
            </el-table-column>
        </el-table>

        <pagination :change="pageChanged" :total="totalCount" :current="currentPage" :page-size="pageSize"
                    style="margin-top:70px;margin-bottom:30px;">{{posts}}
        </pagination>

    </div>
</template>

<script>
    import {
        getQiniuToken,
        showAlert,
        showNotify,
        getList,
        getDataById,
        deleteRequest,
        qiniu_url
    } from '@/common/util.js'

    export default {
        data() {
            return {
                posts: [],
                currentPage: 1,
                totalCount: 0,
                pageSize: 10
            }
        },

        created() {
            this.request();
        },

        methods: {
            request() {
                getList(this.currentPage, this.pageSize, 'post').then((response) => {
                    this.currentPage = response.page;
                    this.totalCount = response.totalCount;
                    this.pageSize = response.pageSize;
                    this.posts = response.items
                })
            },

            pageChanged(page) {
                this.currentPage = page;
                this.request();
            },

            deleteButtonClicked(id) {
                showAlert('是否确认要删除该文章？').then(() => {
                    this.delete(id);
                });
            },

            delete(id) {
                deleteRequest(id, 'post').then(() => {
                    this.request()
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .news-manager-container {
        margin: 2%;
        background-color: white;
        padding-bottom: 20px;
    }

</style>
