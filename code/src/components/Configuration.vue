<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import ConfigurationData 
    from '../assets/data/configuration.json';

  import DevelopmentData
    from '../assets/data/development.json';

  import store 
    from '@/store';

  import developmentConfiguration
    from '@/assets/js/development_configuration';

  import productionConfiguration
    from '@/assets/js/production_configuration';


  export default 
  {
    name: 'Configuration',

    data()
    {
      return {
        shared: null
      }
    },
    
    components: 
    {
    },

    methods:
    {
      setToProduction: function ()
      {
        productionConfiguration.execute();
      },
      setToDevelopment: function ()
      {
        developmentConfiguration.execute();
      }
    },

    created()
    {  
      var config = ConfigurationData;
      var dev = DevelopmentData; 
      
      if( dev.isDebugging ) 
      {
        store.dispatch( 'setConfigurationUrl', config[ 'development' ].configuration_url );
        this.setToDevelopment();
      }
      else 
      {
        store.dispatch( 'setConfigurationUrl', config[ 'production' ].configuration_url );
        this.setToProduction();
      }
    }
  }
</script>
<template>
  <!-- Development -->
  <div>

  </div>
  <!-- Production -->
  <div>

  </div>
</template>