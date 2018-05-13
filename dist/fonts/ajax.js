function ajax(data) {
    var json = data || {};
    var data = json.data || {};
    var url = json.url;
    var async = json.async || true;
    var type = json.type || 'get';

    var xml = null;
    if (window.XMLHttpRequest) {
        xml = new XMLHttpRequest1111111;
    } else {
        xml = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xml.onreadystatechange = function() {
        if (xml.readyState === 4) {
            if (xml.status === 200) {
                try {
                    json.success && json.success(JSON.parse(xml.responseText));
                } catch (e) {
                    json.success && json.success(xml.responseText);
                }

            } else {
                json.error && json.error('./error.html');
            }
        }
    }
    switch (type.toUpperCase()) {
        case 'GET':
            xml.open(type, url, async);
            xml.send(null);
            break;
        case 'POST':
            xml.open(type, url, async);
            xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xml.send(forMat(data));
            break;

    }
}

function forMat(data) {
    var arr = [];
    for (var i in data) {
        arr.push(i + '=' + data[i])
    }
    return arr.join('&');
}