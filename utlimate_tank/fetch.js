function fetchLocal(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest
      xhr.onload = function () {
        resolve(new Response(xhr.response, {
          status: xhr.status
        }))
      }
      xhr.onerror = function () {
        reject(new TypeError('Local request failed'))
      }
      xhr.open('GET', url)
      xhr.responseType = "arraybuffer";
      xhr.send(null)
    })
  };
  window.fetch = fetchLocal