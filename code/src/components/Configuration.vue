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
        
        window.dataLayer = window.dataLayer || [];

        function gtag()
        { 
            dataLayer.push( arguments ); 
        }

        gtag( 'js', new Date() );
        gtag( 'config', 'G-2VM1ZPKDB1' );
      }
      else 
      {
        store.dispatch( 'setConfigurationUrl', config[ 'production' ].configuration_url );

        window.dataLayer = window.dataLayer || [];

        function gtag()
        {
            dataLayer.push( arguments );
        }

        gtag( 'js', new Date() );
        gtag( 'config', 'G-WQNHF6ZWB6' );
      }
    }
  }
</script>
<template>
</template>