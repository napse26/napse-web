// api-setup.js
// Reusable function for making API calls using jQuery AJAX

function callApi({ url, method = 'GET', data = {}, headers = {}, success, error }) {
    $.ajax({
        url: url,
        method: method,
        data: data,
        headers: headers,
        dataType: 'json',
        success: function(response) {
            if (typeof success === 'function') success(response);
        },
        error: function(xhr, status, err) {
            if (typeof error === 'function') error(xhr, status, err);
        }
    });
}

// Example usage:
// callApi({
//     url: 'https://api.example.com/data',
//     method: 'POST',
//     data: { key: 'value' },
//     headers: { 'Authorization': 'Bearer token' },
//     success: function(response) { console.log(response); },
//     error: function(xhr, status, err) { console.error(err); }
// });
