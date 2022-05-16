function setup()
{
    window.dataLayer = window.dataLayer || [];

    function gtag()
    {
        dataLayer.push( arguments );
    }

    gtag( 'js', new Date() );
    gtag( 'config', 'G-2VM1ZPKDB1' );
}

module.exports = {
    execute: function ()
    {
        setup();
    }
}