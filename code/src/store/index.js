import { createStore } 
  from 'vuex'

import mobileStore 
  from './mobile';

export default createStore
(
  {
    namespace: true,
    
    state: 
    {
      configurationServerUrl: String(),
      loggedInAsUser: false,
    },

    getters: 
    {
      retrieveConfigurationUrl: function( state )
      {
        return state.configurationServerUrl;
      },

      retrieveUserState: function( state )
      {
        return state.loggedInAsUser;
      }
    },

    mutations: 
    {
      UPDATE_CONFIGURATION_SERVER( state, payload )
      {
        if( typeof payload == 'string' )
        {
          state.configurationServerUrl = payload;
        }
        else 
        {
          throw console.error( 'Wrong data format' );
        }
      },

      UPDATE_USER_STATE( state, payload )
      {
        if( typeof payload == 'bool' )
        {
          state.loggedInAsUser = payload;
        }
        else 
        {
          throw console.error( 'Wrong data format' );
        }
      }
      
    },

    methods:
    {
      
    },

    actions:
    {
      setConfigurationUrl( context, payload )
      {

        context.commit( 'UPDATE_CONFIGURATION_SERVER', payload );
      },
      
      setUserState( context, payload )
      {
        context.commit( 'UPDATE_USER_STATE', payload );
      }

    },

    modules: 
    {
      mobileStore
    }
  }
)
