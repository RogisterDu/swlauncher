<template>
  <div class="container">
    <el-form ref="form" :model="ConfigList" label-width="80px">
      <el-form-item label="文件路径">
        <div class="FileChoose" v-if="ConfigList.FilePath === ''">
          <el-upload
            accept=".exe"
            action=""
            class="upload-demo"
            :limit="1"
            :file-list="FileList"
            :auto-upload="false"
            :on-change="beforeAvatarUpload"
          >
            <el-button slot="trigger" size="small" type="primary">
              选择路径
            </el-button>
          </el-upload>
          <div style="font-size: 12px; color: grey; margin-left: 5px">
            请选择文件夹下的.exe文件
          </div>
        </div>
        <div v-if="ConfigList.FilePath !== ''">
          <el-input
            v-model="ConfigList.FilePath"
            placeholder="请手动输入路径"
            style="width: 350px"
            clearable
          ></el-input>
          <!--          <el-button @click="emptyFilePath">重置</el-button>-->
        </div>
      </el-form-item>
      <!--      <el-form-item label="活动名称">-->
      <!--        <el-input v-model="ConfigList.name"></el-input>-->
      <!--      </el-form-item>-->
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SettingConfig",
  data() {
    return {
      ConfigList: {
        Theme: "",
        FilePath: "",
      },
      FileList: [],
    };
  },
  methods: {
    beforeAvatarUpload(file) {
      // console.log(file);
      if (file.name === "SoulWorker100.exe") {
        this.ConfigList.FilePath = file.raw.path;
      } else {
        this.$message.error("选择的文件不是SoulWorker100");
        this.FileList = [];
      }
    },
    emptyFilePath() {
      this.ConfigList.FilePath = "";
      this.FileList = [];
    },
  },
};
</script>

<style scoped>
.FileChoose {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
</style>
