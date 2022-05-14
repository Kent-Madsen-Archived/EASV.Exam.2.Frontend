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
        ShowMobileMenu( { state, commit, rootState } )
        {
            commit( 'setMenuStateShow', null );
        },

        HideMobileMenu( { state, commit, rootState } )
        {
            commit( 'setMenuStateHide', null );
        }
    },
    getters: 
    {
        RetrieveShowMobileMenu( state )
        {
            return state.showMenu;
        }
    }

}


module.exports = MobileStore;