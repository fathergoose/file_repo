(function () {


    function lookUpById (id) {
        window.location.href = '/pages/files/' + id.toString();
    }


    window.onload = function () {
        document.getElementById('look-up').onclick = function() {
            var id = document.getElementById('id-input').value;
            lookUpById(id);
        }
    }

}());
