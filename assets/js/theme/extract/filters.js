const filterPanels = $('.sf-js__productFilter');

filterPanels.each(function (e) {
    const $filterPanelInstance = $(this);
    const $filterPanelTarget = $($filterPanelInstance.data('target'));
    
    $filterPanelInstance.click(function (e) {
        if ($filterPanelTarget.hasClass("open"))
        {
            $filterPanelInstance.removeClass("open");
            $filterPanelTarget.removeClass("open");
        }
        else
        {
            $filterPanelInstance.addClass("open");
            $filterPanelTarget.addClass("open");
        }
    });
});