/**
 * 母板页插件
 * Esmool @ 2016
 */
(function ($) {

    /**
     * 执行母板解析
     */
    function parse() {
    	var collection = $('div[masterTag], *[masterPlaceHolder]');
        collection.filter('div[masterTag]').each(function () {
            var content = $(this).html();
            var tagName = $(this).attr('masterTag');
            var selector = '*[masterPlaceHolder="' + tagName + '"]';
            var placeHolder = collection.filter(selector);
            if (placeHolder.length > 0) {
                placeHolder.html(content);
            }
            $(this).remove();
        });
    }

    /**
     * 解析母版完成动作
     */
    function afterParse() {
        if (!window.pageLoad || typeof window.pageLoad !== 'function') {
            console.warn('Cannot find function pageLoad()');
            return;
        }

        window.pageLoad();
    }

    /**
     * 注册解析母版动作
     */
    $(document).ready(function () {
        parse();
        afterParse();
    });

})(jQuery);