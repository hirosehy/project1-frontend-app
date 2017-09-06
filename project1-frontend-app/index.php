<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="js/mapSet.js"></script>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <main>
        <h1>おすすめの場所</h1>
        <div id="map"></div>
        <a href="add.html" id="addButton">おすすめの場所追加</a>
        <form name="search" class="form" method="get" action="index.php">
            <select name="type" onchange="searchType()">
                <option value="全て">全て</option>
                <option value="グルメ">グルメ</option>
                <option value="観光">観光</option>
                <option value="レジャー">レジャー</option>
                <option value="宿泊">宿泊</option>
                <option value="ショッピング">ショッピング</option>
            </select><br />
            <input type="text" id="keyword" name="keywordText" value="" />
            <input type="submit" value="検索">
            <input type="hidden" id="getType" name="typeName">
        </form>
        <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeQViLCfmM6Z_S9I9IChQL04Hw-m-aLv4&callback=initMap">
        </script>
    </main>
<?php
    if(isset($_GET["type"])){
        $type = $_GET["type"];
        print("<script>");
        print("searchTypeInput('".$type."');");
        print("</script>");
    }
    if(isset($_GET["keywordText"])){
        $keyword = $_GET["keywordText"];
        print("<script>");
        print("searchKeywordInput('".$keyword."');");
        print("</script>");
    }
?>
</body>
</html>