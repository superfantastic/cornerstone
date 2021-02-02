const $alertBoxCloseButton = $('.sf-alertBox-close');

$alertBoxCloseButton.click(function (e) {
    const $parent = $(this).parent();
    $parent.hide();
});