const $mobileNavButton = $('.sf-navigation__mobileButton');

$mobileNavButton.click(function (e) {
    const $navOverlay = $('.sf-header__navigation')
    if ($navOverlay.hasClass('open'))
    {
        $navOverlay.removeClass('open');
    }
    else
    {
        $navOverlay.addClass('open');
    }
});