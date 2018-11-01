<template>
  <div class="service-container">
    <div style="font-size:30px;padding-top:50px;margin-left:2%;">
      茶艺表演
    </div>

    <router-link to="/site-manager/service/createTeaPerform" style="color:white;">
      <a class="button is-info is-active" style="  margin-top: 30px;margin-left:30px;width: 90px;">新增</a>
    </router-link>

    <el-table :data="cases" style="width:96%;margin-left:2%;margin-top:20px;">
      <el-table-column label="创建时间" width="170">
        <template slot-scope="scope">
          <span>{{ scope.row.gmtCreate | moment("YYYY-MM-DD HH:mm")  }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <router-link :to="{path: '/site-manager/service/updateTeaPerform',query: {id:scope.row.id}}"
                       style="color:white;">
            <a class="button is-info is-active">编辑</a>
          </router-link>

          <a class="button is-danger is-active" @click="deleteButtonClicked(scope.row.id)">删除</a>
        </template>
      </el-table-column>
    </el-table>

    <pagination :change="pageChanged" :total="totalCount" :current="currentPage" :page-size="pageSize"
                style="margin-top:70px;margin-bottom:30px;"></pagination>

  </div>
</template>

<script>

</script>

<style>
  .service-container {
    margin: 2%;
    background-color: white;
    padding-bottom: 20px;
  }
</style>
