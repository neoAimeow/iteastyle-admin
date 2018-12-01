<template>
    <div class="news-manager-container">
        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            新闻中心
        </div>

        <router-link to="/site-manager/news-center/create-news" style="color:white;">
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
                        <router-link :to="{path: '/site-manager/news-center/update-news',query: {id:scope.row.id}}"
                                     style="color:white;">编辑
                        </router-link>
                    </a>
                    <a class="button is-danger is-active" @click="deleteButtonClicked(scope.row.id)">删除</a>
                </template>
            </el-table-column>
        </el-table>

        <pagination :change="pageChanged" :total="totalCount" :current="currentPage" :page-size="pageSize"
                    style="margin-top:70px;margin-bottom:30px;">
            {{posts}}
        </pagination>

    </div>
</template>

<script>
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
            this.request()
        },

        methods: {
            request() {
                var that = this
                this.$ajax.get('/admin/getList', {
                    params: {
                        pageSize: this.pageSize,
                        page: this.currentPage,
                        type: 'post'
                    }
                })
                    .then(function (response) {
                        that.posts = response.data.model.items
                        that.totalCount = response.data.model.totalCount
                    })
            },

            pageChanged(page) {
                this.currentPage = page
                this.request()
            },

            deleteButtonClicked(id) {
                this.$alert('是否确认要删除该文章？', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    showCancelButton: true
                }).then(() => {
                    this.delete(id)
                })
            },

            delete(id) {
                var that = this
                this.$ajax.post('/admin/deletePost', {postId: id})
                    .then(function (response) {
                        if (response.data.success) {
                            that.$notify({
                                title: '提示',
                                message: '删除成功'
                            })
                            that.request()
                        }
                    })
                    .catch(function (response) {
                        that.$notify({
                            title: '错误',
                            message: '删除失败'
                        })
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
