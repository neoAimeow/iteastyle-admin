<template>
    <div class="case-manager-container">
        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            产品展示
        </div>

        <router-link to="/site-manager/classical-case/update-case" style="color:white;">
            <a class="button is-info is-active" style="  margin-top: 30px;margin-left:30px;width: 90px;">新增</a>
        </router-link>

        <el-table :data="cases" style="width:96%;margin-left:2%;margin-top:20px;">
            <el-table-column label="创建时间" width="170">
                <template slot-scope="scope">
                    <span>{{ scope.row.gmtCreate | dateFormat("YYYY-MM-DD HH:mm")  }}</span>
                </template>
            </el-table-column>
            <el-table-column label="产品案例ID" width="250">
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="案例标题">
                <template slot-scope="scope">
                    <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                    <router-link
                            :to="{path: '/site-manager/classical-case/update-case',query: {id:scope.row.id, type: 'update'}}"
                            style="color:white;">
                        <a class="button is-info is-active">编辑</a>
                    </router-link>
                    <a class="button is-danger is-active" @click="deleteButtonClicked(scope.row.id)">删除</a>
                </template>
            </el-table-column>
        </el-table>

        <pagination :change="pageChanged"
                    :total="totalCount"
                    :current="currentPage"
                    :page-size="pageSize"
                    style="margin-top:70px;margin-bottom:30px;">
        </pagination>

    </div>
</template>

<script>
    import {
        getQiniuToken,
        showAlert,
        showNotify,
        getList,
        deleteRequest,
        qiniu_url
    } from '@/common/util.js'

    export default {
        data() {
            return {
                cases: [],
                currentPage: 1,
                totalCount: 0,
                pageSize: 10
            }
        },

        created() {
            this.request()
        },

        methods: {
            request() {
                getList(this.currentPage, this.pageSize, 'case').then((response) => {
                    this.currentPage = response.page;
                    this.totalCount = response.totalCount;
                    this.pageSize = response.pageSize;
                    this.cases = response.items
                })
            },

            pageChanged(page) {
                this.currentPage = page
                this.request()
            },

            deleteButtonClicked(id) {
                showAlert('是否确认要删除这条产品展示？').then(() => {
                    this.delete(id)
                })
            },

            delete(id) {
                deleteRequest(id, 'case').then(() => {
                    this.request()
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .case-manager-container {
        margin: 2%;
        background-color: white;
        padding-bottom: 20px;
    }
</style>
