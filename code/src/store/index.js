import { createStore } 
  from 'vuex'

export default createStore(
  {
    namespace: true,
    
    state: 
    {
      configurationServerUrl: String()
    },

    getters: 
    {
      retrieveConfigurationUrl: function( state )
      {
        return state.configurationServerUrl;
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
      }

    },

    modules: 
    {

    }
  }
)
