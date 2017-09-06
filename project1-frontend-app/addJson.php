<?php
    $fp = fopen("../place.json", "a");
    $line = '{"name": "'.$_POST["placeName"].'","lat":'.$_POST["jsonLat"].', "lng": '.$_POST["jsonLng"].',"type": "'.$_POST["jsonType"].'","comment": "'.$_POST["jsonComment"].'"}';
    fwrite( $fp, ",\n".$line );
    fclose( $fp );
    header("Location: http://localhost/googlemaps/ver1/index.php");
?>
