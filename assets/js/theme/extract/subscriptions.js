const subscriptionOptions = $('.sf-js__subscriptionOptions');

subscriptionOptions.each(function (e) {
    const $subscriptionOptionsToggleInstance = $(this);
    const $subscriptionOptions = $('[data-subscription-element]');
    
    $subscriptionOptionsToggleInstance.change(function (e) {
        if ($subscriptionOptionsToggleInstance.is(":checked")) {
            $subscriptionOptions.css('display', 'flex');
        }
        else {
            $subscriptionOptions.hide();
        }
    });
});