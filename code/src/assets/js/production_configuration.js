function setup()
{
    window.dataLayer = window.dataLayer || [];

    function gtag()
    {
        dataLayer.push( arguments );
    }

    gtag( 'js', new Date() );
    gtag( 'config', 'G-WQNHF6ZWB6' );
}

module.exports = {
    execute: function ()
    {
        setup();
    }
}