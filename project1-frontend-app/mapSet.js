function initMap() {
    /* 神戸電子 */
    var coordinates = localStorage.getItem("神戸電子");
    var coordinates = coordinates.split(",");
    var NS = Number( coordinates[ 0 ] );
    var EW = Number( coordinates[ 1 ] );
    var uluru = { lat: NS, lng: EW };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });


    //マーカー表示
    for( var i = localStorage.length - 2; i >= 0; i-- ){
        var name = localStorage.key( i );
        var coordinates = localStorage.getItem( name );
        var coordinates = coordinates.split(",");
        var NS = Number( coordinates[ 0 ] );
        var EW = Number( coordinates[ 1 ] );
        eval("var m_latlng" + i + "= new google.maps.LatLng(" + NS + "," + EW + ");");
        eval("var marker" + i + "= new google.maps.Marker({position: m_latlng" + i +",map: map});");
    }

    /* ディズニー */
    /*
    var m_latlng1 = new google.maps.LatLng(35.632605,139.88132);
    var marker1 = new google.maps.Marker({
        position: m_latlng1,
        map: map
    });
    */
    /* 関西国際空港 */
    /*
    var latlng = new google.maps.LatLng(34.434877,135.24421);
    var opts = new google.maps.Marker({
        position : latlng,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content:'関西国際空港',
        position:latlng
    });
    */

    infowindow.open(map);
}