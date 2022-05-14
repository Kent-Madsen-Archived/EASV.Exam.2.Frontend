import { createStore } 
  from 'vuex'

  
export default createStore
(
  {
    namespace: true,
    
    state: 
    {
<<<<<<< HEAD
      configurationServerUrl: String(),
      loggedInAsUser: false,
=======

>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30
    },

    getters: 
    {
<<<<<<< HEAD
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

=======

    },
    mutations: 
    {
      
    },
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30
    methods:
    {
      
    },

    actions:
    {
<<<<<<< HEAD
      setConfigurationUrl( context, payload )
      {

        context.commit( 'UPDATE_CONFIGURATION_SERVER', payload );
      },
      
      setUserState( context, payload )
      {
        context.commit( 'UPDATE_USER_STATE', payload );
      }
=======
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30

    },

    modules: 
    {

    }
  }
)
