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

        invertMenuState( state )
        {
            state.showMenu = !state.showMenu;
        }
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
        },

        InvertOfMenu( { state, commit, rootState } )
        {
            commit( 'invertMenuState', null );
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