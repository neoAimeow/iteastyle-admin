<template>
  <div>

    <div class="user-manager-container">
      <div style="font-size:30px;padding-top:50px;margin-left:2%;">
        用户管理
      </div>
      <a class="button is-info is-active" style="  margin-top: 30px;margin-left:30px;width: 90px;">
        <router-link to="/system-preferences/user-manager/create-user" style="color:white;">新增</router-link>
      </a>

      <el-table :data="adminUsers.docs" style="width:96%;margin-left:2%;margin-top:20px;">
        <el-table-column label="用户ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="昵称">
          <template slot-scope="scope">
            <span>{{ scope.row.usernick }}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">
            <span>{{ scope.row.mail }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <a class="button is-info is-active">
              <router-link :to="{path: '/system-preferences/user-manager/update-user',query: {id:scope.row.id}}" style="color:white;">编辑</router-link>
            </a>
            <a class="button is-danger is-active" @click="deleteButtonClicked(scope.row.id)">删除</a>
          </template>
        </el-table-column>
      </el-table>

    <pagination :total="adminUsers.total" :current="adminUsers.page" :page-size="10" style="margin-top:70px;margin-bottom:30px;"></pagination>

    </div>

  </div>
</template>

<script>

export default {
  // apollo: {
  //   adminUsers: {
  //     query() {
  //       return adminUsersGQL;
  //     }
  //   },
  // },
  data () {
    return {
      adminUsers: {},
      isShow: false
    }
  },
  methods: {
    deleteButtonClicked (id) {
      this.$alert('是否确认要删除该用户？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true
      }).then(({
        value
      }) => {
        this.delete(id)
      }).catch(() => {})
    },
    delete (id) {
      // return this.$apollo.mutate({
      //     mutation: deleteAdminUserGQL,
      //     variables: {
      //       id
      //     },
      //   })
      //   .then(() => {
      //     this.$notify({
      //       title: '成功',
      //       message: '删除成功',
      //       type: 'success'
      //     });
      //   })
      //   .catch(err => {
      // this.$notify.error({
      //   title: '错误',
      //   message: '删除失败'
      // });
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-manager-container {
    margin: 2%;
    background-color: white;
    padding-bottom: 20px;
  }

  .createUser {
    margin-top: 30px;
    margin-left: 30px;
    width: 90px;
  }
</style>
