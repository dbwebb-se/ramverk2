<template>
    <div class="square" @click="onClick(index)">
      {{ current }}
    </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
      onClick: Function,
      index: Number,
      current: String,
  }
}
</script>

<style scoped>
.square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
}
</style>

