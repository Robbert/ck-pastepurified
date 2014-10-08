CKEDITOR.plugins.add('ck-pastepurified', {
    init: function (editor) {
    
        // Highest priority
        var priority = 1;

        editor.on('paste', function (evt) {

            if (!(typeof DOMPurify === "object" && typeof DOMPurify.sanitize === "function"))
            {
                try
                {
                    console.log("Include purify.js from DOMPurify to enable the pastepurified plugin for CKEditor.");
                }
                // Silently discard error
                catch (e) {}
                return;
            }

            var html = evt.data.dataValue;

            // DOMPurify.sanitize() will return the input untreated when the browser isn't supported
            html = DOMPurify.sanitize(html);

            // Update the event to contain the 'purified' HTML
            evt.data.dataValue = html;

        }, null, null, priority);
    }
});