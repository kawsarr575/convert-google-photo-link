

$(document).ready(function () {

    // Initialize an array to store Google Drive URLs
    var driveUrls = JSON.parse(localStorage.getItem('driveUrls')) || [];

    // Get all generated link count number
    var linkCount = parseInt(localStorage.getItem('linkCount')) || 0;

    // Initialize or retrieve the daily conversion count object
    var dailyCounts = JSON.parse(localStorage.getItem('dailyCounts')) || {};


    // Initial update of HTML
    updateHtml();

    $("#link_generator_input").on("input", function () {
        var inputUrl = $(this).val();

        // Checking if the input is a valid Google Drive URL
        var matchResult = inputUrl.match(/\/file\/d\/([^\/]+)\/|\/view\?usp=sharing$/);
        if (matchResult) {
            var fileId = matchResult[1];
            var convertedUrl = fileId;

            // Add the converted URL to the array
            driveUrls.unshift(convertedUrl);

            // Update local storage
            localStorage.setItem('driveUrls', JSON.stringify(driveUrls));

            // Increment the link count
            linkCount++;
            // Update local storage with the link count
            localStorage.setItem('linkCount', linkCount);

            // Get the current date
            var currentDate = new Date().toISOString().split('T')[0];

            // Increment the daily conversion count
            dailyCounts[currentDate] = (dailyCounts[currentDate] || 0) + 1;

            // Update local storage with the daily conversion count
            localStorage.setItem('dailyCounts', JSON.stringify(dailyCounts));

            updateHtml();
            

            // Reset the input field after 3 seconds
            setTimeout(function () {
                $('#link_generator_input').val('');
            }, 3000);

            
        } else {

            $('.gplvc-input-area').append('<div class="err-msg"><i class="ri-error-warning-line"></i> Invalid Google Drive Photo URL! Please Enter Google Drive Photo View Link URL</div>');
            
            setTimeout(function () {
                $('.err-msg').remove(); // Remove the error message from the DOM
                $('#link_generator_input').val('');
            }, 5000);

            // console.log("Invalid Google Drive Photo URL");
        }
    });

    // Remove single item by clicking remove button
    $('.gplvc-link-show-area').on('click', '.remove-item', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        var indexToRemove = $(this).closest('.link-list').data('index');
        driveUrls.splice(indexToRemove, 1); // Remove from array
        localStorage.setItem('driveUrls', JSON.stringify(driveUrls)); // Update local storage
        updateHtml(); // Update HTML
        countListItem();
    });

    // Add click event for the "Clear All" button
    $('.clear-list a').on('click', function () {
        // Clear the array and update local storage
        driveUrls = [];
        localStorage.setItem('driveUrls', JSON.stringify(driveUrls));

        // Update HTML to remove all items
        updateHtml();

        // Hide the "Clear All" button
        $(this).hide();
    });

    function updateHtml() {
        // Clear existing HTML
        $('.gplvc-link-show-area .list-body').empty();

        // Reverse the array to display in descending order
        var reversedUrls = driveUrls.slice().reverse();

        // Loop through the array and update HTML
        reversedUrls.forEach(function (url) {
            $('.gplvc-link-show-area .list-body').prepend(
                '<div class="link-list">' +
                '<div class="img-area">' +
                '<a class="download" title="download" href="https://drive.google.com/uc?export=download&id=' + url + '" download><i class="ri-download-cloud-2-line"></i></a > '+
                '<a class="img" href="https://lh3.googleusercontent.com/d/' + url + '" target="_blank"><img src="https://lh3.googleusercontent.com/d/' + url + '" alt="img"></a>' +
                '</div>' +
                '<div class="input-area">' +
                '<input type="text" readonly value="https://lh3.googleusercontent.com/d/' + url + '">' +
                '<img src="assets/img/copy-icon.svg" class="copy-img-link" title="Copy Link" alt="copy-icon">' +
                '</div>' +
                '<a href="javascript:void(0)" class="remove-item" >Remove</a>' +
                '</div>'
            );
        });

        if (reversedUrls.length === 0) {
            $('.gplvc-link-show-area .list-body').append('<div class="empty-list-message"><i class="ri-emotion-sad-line"></i> <span>Sorry! no item found</span> </div>');
            $('.clear-list a').hide();
        } else {
            $('.clear-list a').show();
        }

        copyLink();
        countListItem();
    }

    // Copy each link
    function copyLink() {
        $('.copy-img-link').on('click', function () {
            var input = $(this).closest('.gplvc-link-show-area .link-list .input-area').find('input');
            var inputValue = input.val();

            input.select();
            // Use the modern Clipboard API to copy text to the clipboard
            navigator.clipboard.writeText(inputValue).then(function () {
                console.log('Text successfully copied to clipboard: ' + inputValue);
            }).catch(function (err) {
                console.error('Unable to copy text to clipboard', err);
            });
        });
    }

    // Count list item
    function countListItem() {
        $('.count-total-item-list').text(driveUrls.length);
    }
    countListItem();

 

});