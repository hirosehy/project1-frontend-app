var map;
var lat;
var lng;

function initMap() {
    // Google Mapで利用する初期設定用の変数
    var latlng = new google.maps.LatLng(39, 138);
    var opts = {
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latlng
    };

    // getElementById("map")の"map"は、body内の<div id="map">より
    map = new google.maps.Map( document.getElementById("map"), opts );
    mk_array = new Array();
    google.maps.event.addListener( map, 'click', mylistener );
}

//マーカーの追加
function mylistener( event ){
    lat = event.latLng.lat();
    lng = event.latLng.lng();

    removeMarker();

    var latlng = new google.maps.LatLng( event.latLng.lat(), event.latLng.lng() );
    mk = new google.maps.Marker({
        map: map,
        position: latlng,
    });
    mk.setMap( map );
    mk_array.push( mk );

    document.getElementById("placeLat").value = lat;
    document.getElementById("placeLng").value = lng;
}

//マーカーの削除
function removeMarker(){
    for( var i = 0;i < mk_array.length; i++ ){
        mk_array[ i ].setMap( null );//今まで置いたマーカーを削除
    }
}

//場所の追加
function methodAdd(){
    if( lat == null || lng == null || place == "" ){
        alert("おすすめの場所をクリックしてください");
    }
}
