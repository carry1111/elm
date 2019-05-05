<template>
    <div id="business">
        <p v-for="i in 100" :key="i">
            {{i}}<br>
        </p>
    </div>
</template>

<script>
export default {
    name:'business',
}
</script>

<style lang="less" scoped>

</style>


