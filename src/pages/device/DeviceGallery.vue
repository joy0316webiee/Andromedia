<template>
  <device-container>
    <v-tree-menu :nodes="tree.nodes" :depth="0" :label="tree.label"/>
  </device-container>
</template>

<script>
export default {
  name: "DeviceGallery",
  data() {
    return {
      tree: {
        label: "",
        nodes: [
          {
            label: "停止运行"
          },
          {
            label: "启用"
          },
          {
            label: "删除"
          },
          {
            label: "授权"
          },
          {
            label: "运行脚本",
            nodes: [
              {
                label: "脚本1",
                nodes: [
                  {
                    label: "本脚1"
                  },
                  {
                    label: "本脚2"
                  }
                ]
              },
              {
                label: "脚本2"
              },
              {
                label: "脚本3"
              },
              {
                label: "脚本4"
              },
              {
                label: "脚本5"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>