
<?php include_once 'part/header.php'; ?>

    <div class="gplvc-container">

        <h1>Google Drive Direct Link Generator</h1>
        <div class="gplvc-input-area">
            <input type="text" id="link_generator_input" placeholder="Paste Google Drive Photo URL">
        </div>

        <div class="gplvc-link-show-area">
            <div class="list-header">
                <h3 class="title">Generated URL List: <span class="count-total-item-list"></span></h3>
                <div class="clear-list"><a href="javascript:void(0)"><i class="ri-folder-close-line"></i> Clear All</a></div>
            </div>

            <div class="list-body">
                <!-- image link url comes from jquery -->
            </div>
            
        </div>

        <div class="gplvc-how-to-use" id="gplvchowtouse">
            <div class="howtouse-header">
                <h3 class="title">How to use & Use case</h3>
            </div>

            <div class="howtouse-body">
                <p>This system facilitates the sharing of Google Drive images anywhere by generating image URLs. Additionally, users can embed these URLs in HTML (img) tags on any website. If you are unsure about how to use this feature, please watch the video below for a more detailed explanation.</p>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>

               
            </div>
        </div>
        
    </div>

<?php include_once 'part/footer.php'; ?>
