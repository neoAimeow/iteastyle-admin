<template>
  <div class="log-manager-container">
    <div style="font-size:30px;padding-top:50px;margin-left:2%;">
      操作日志
    </div>
      <timeline style="margin-left:40px;margin-right:40px;padding-top:40px;margin-bottom:40px;">
        <timeline-item date="2 minutes ago" type="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.
        </timeline-item>
        <timeline-item date="Sat, 5 Mar" type="primary">
            <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </timeline-item>
        <timeline-item date="Sun, 11 Feb" type="success">
            Call to customer Jacob and discuss the detail.
        </timeline-item>
      </timeline>
  </div>
</template>

<style lang="scss" scoped>
.log-manager-container {
  margin: 2%;
  background-color: white;
  padding-bottom: 20px;
}
</style>
