var cnt = 0;
var data;

function initMap() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            data = "[" + req.responseText + "]";
            data = JSON.parse(data);
        }
    };
    req.open("GET", "http://localhost/googlemaps/www/json/place.json", false);
    req.send( null );

    var initPlace = {lat: 34.699643, lng: 135.193141};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: initPlace
    });
    var marker = new google.maps.Marker({
        position: initPlace,
        map: map
    });

    for( var row in data ){
        cnt++;
        eval("m_latlng" + cnt + "= new google.maps.LatLng(" + data[ cnt - 1 ].lat + "," + data[ cnt - 1 ].lng + ");");
        eval("marker" + cnt + "= new google.maps.Marker({position: m_latlng" + cnt +",map: map});");
    }

    //種類別検索
    searchType();

    //キーワード検索
    searchKeyword();

}

function searchType(){
    var type = document.search.getType.value;

    if( type == "全て" || type ==='' ){
        for( var i = 1; i <= cnt; i++ ){
            eval("marker" + i + ".setVisible(true);");
        }
    }else{
        for( var i = 1; i <= cnt; i++ ){
            if( type == data[ i - 1 ].type ){
                eval("marker" + i + ".setVisible(true);");
            }else{
                eval("marker" + i + ".setVisible(false);");
            }
        }
    }
}

function searchKeyword(){
    var word = document.search.keywordText.value;
    if( word != "" ){
        for( var i = 0; i < cnt; i++ ){
            placeName = data[ i ].name;
            placeComment = data[ i ].comment;
            //マーカーが表示状態の中から、さらに絞る
            if(eval("marker" + (i + 1) +".getVisible();")){
                if( placeName.match( word ) || placeComment.match( word ) ){
                    eval("marker" + (i + 1) + ".setVisible(true);");
                }else{
                    eval("marker" + (i + 1) + ".setVisible(false);");
                }
            }
        }
    }
}


function searchTypeInput( type ){

    document.getElementById("getType").value = type;

}
function searchKeywordInput( keyword ){

    document.getElementById("keyword").value = keyword;

}