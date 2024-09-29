
<?php
    include_once 'includes/class-loaded.php';

    $helper_obj = new Helper();

    $site_url = $helper_obj->site_url();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/style.css">
    
    <title>Google photo link converter</title>
</head>
<!-- gplv == Google Phone link view converter -->
<body class="gplvc-body">

    <div class="gplvc-header">
        <div class="inner">
            <div class="logo">
                <a href="<?php $site_url; ?>">GPLG</a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#gplvchowtouse">How to use</a></li>
                    <li><a href="https://www.buymeacoffee.com/gplg" target="_blank">Support Us</a></li>
                </ul>
            </div>
        </div>
    </div>