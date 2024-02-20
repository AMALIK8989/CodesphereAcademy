window.onload = function() {
    // Clear cache
    if (window.location.hash === '#clearCache') {
        if (window.location.href.indexOf('?') > -1) {
            window.location.href += '&reload=true';
        } else {
            window.location.href += '?reload=true';
        }
    }
}

