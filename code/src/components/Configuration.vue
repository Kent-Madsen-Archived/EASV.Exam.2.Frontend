<script>
  import ConfigurationData 
    from '../assets/data/configuration.json';

  import DevelopmentData
    from '../assets/data/development.json';

  import store 
    from '@/store';


  export default 
  {
    name: 'Configuration',
    
    components: 
    {
    },

    created()
    {  
      var config = ConfigurationData;
      var dev = DevelopmentData; 
      
      if( dev.isDebugging ) 
      {
        store.dispatch( 'setConfigurationUrl', config[ 'development' ].configuration_url );
      }
      else 
      {
        store.dispatch( 'setConfigurationUrl', config[ 'production' ].configuration_url );
      }
    }
  }
</script>
<template>

</template>