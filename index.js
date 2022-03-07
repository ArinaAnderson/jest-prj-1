'use strict';
(function (global) {
  const GET_URL = "data/ice-creams.json";

  const createXhrRequest = function (onLoadHandler) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = function() { 
      handleResponse(onLoadHandler); 
    };

    function handleResponse(responseHandler) {
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        responseHandler(xhr.response);
      }
    }
    /*
    xhr.addEventListener('load', function (onLoadHandler) {
      if (xhr.status >= 200 && xhr.status < 300) {
        onLoadHandler(xhr.response);
      } else {
        alert(`Статус загрузки элементов каталога: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener('error', function () {
      alert('Произошла ошибка соединения');
    });
    */
    return xhr;
  };

  /*
  xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
  xhr.setRequestHeader('Content-Type', 'application/xml');
  xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
  */

  window.backend = {
    load: function (onLoadHandler) {
      const xhr = createXhrRequest(onLoadHandler);
      xhr.open('GET', GET_URL);
      // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhr.send();
    },
  };
})();

