// contact.js
// Handles contact form submission and posts data using jQuery AJAX
const api_path = "/api/contactus";

$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        // Convert form data to object
        var formArray = form.serializeArray();
        var formDataObj = {};
        $.map(formArray, function(n, i){
            formDataObj[n['name']] = n['value'];
        });
        var jsonData = JSON.stringify(formDataObj);

        var resultContainer = form.find('.result');
        if (!resultContainer.length) {
            resultContainer = $('<div class="result mt-3"></div>');
            form.append(resultContainer);
        }

        $.ajax({
            url: api_path,
            method: 'POST',
            data: jsonData,
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                resultContainer.html(
                    '<div class="alert alert-success" style="color: #155724; background-color: #d4edda; border: 1px solid #c3e6cb; padding: 12px 20px; border-radius: 4px; margin-top: 15px;">' +
                    (response && response.message ? response.message : 'Message sent successfully!') +
                    '</div>'
                );
                form[0].reset();
            },
            error: function(xhr, status, err) {
                resultContainer.html(
                    '<div class="alert alert-danger" style="color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 12px 20px; border-radius: 4px; margin-top: 15px;">' +
                    'There was an error sending your message. Please try again later.' +
                    '</div>'
                );
            }
        });
    });
});
