const state = {
    isShowFoot: true, // 是否显示底部导航栏
}
const getters = {}
const mutations = {
    CHANGE_FOOT_MU(state, isShow) {
        state.isShowFoot = isShow;
    },
}
const actions = {
    CHANGE_FOOT_SHOW({commit}, isShow) {
        commit('CHANGE_FOOT_MU', isShow);
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
