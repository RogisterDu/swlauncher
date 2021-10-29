<template>
  <div class="container">
    <el-form ref="form" :model="ConfigList" label-width="80px">
      <el-form-item label="文件路径">
        <el-upload
          accept=".exe"
          action=""
          class="upload-demo"
          :limit="1"
          :file-list="FileList"
          v-if="ConfigList.FilePath === ''"
          :auto-upload="false"
          :on-change="beforeAvatarUpload"
        >
          <el-button slot="trigger" size="small" type="primary">
            选择路径
          </el-button>
          <div slot="tip" class="el-upload__tip">请选择文件夹下的.exe文件</div>
        </el-upload>
        <div v-if="ConfigList.FilePath !== ''">
          <el-input
            v-model="ConfigList.FilePath"
            placeholder="请手动输入路径"
          ></el-input>
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
  },
};
</script>

<style scoped></style>
