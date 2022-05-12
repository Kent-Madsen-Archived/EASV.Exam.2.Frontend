const MobileStore = 
{
    state: () => 
    (
        {
            showMenu: false
        }
    ),
    mutations: 
    {
        setMenuStateHide( state )
        {
            state.showMenu = false;
        },

        setMenuStateShow( state )
        {
            state.showMenu = true;
        },
    },
    actions: 
    {
        ShowMobileMenu({state, commit, rootState})
        {
            commit('setMenuStateShow');
        },

        HideMobileMenu({state, commit, rootState})
        {
            commit('setMenuStateHide');
        }
    },
    getters: 
    {
        ShowMobileMenu( state )
        {
            return state.showMenu;
        }
    }

}

module.exports = MobileStore