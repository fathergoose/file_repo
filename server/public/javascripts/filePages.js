(function () {
    var httpRequest;

    function lookupId () {
        return '/api/files/' + document.getElementById('id-input').value.toString();
        
    }

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = showResults;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function showResults() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var file = JSON.parse(httpRequest.response).data;
                document.getElementById('results').innerHTML = file.name;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }

    window.onload = function () {
        var btn = document.getElementById('ajax-look-up');
        var field = document.getElementById('id-input'); 

        btn.onclick = function () { makeRequest(lookupId()); };

        document.getElementById('look-up').onclick = function() {
            var id = document.getElementById('id-input').value;
            lookUpById(id);
        }
    };

}());
