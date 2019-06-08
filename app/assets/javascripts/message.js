$(document).on('turbolinks:load', function() {
  $(function(){
    function buildHTML(message){
      var MessageImage = ``
      if (message.image){
        MessageImage = `<img class="lower-message__image" src="${message.image}">`
      }
      var html = `<div class= message>
                    <div class= upper-message>
                      <div class= upper-message__user-name>
                        ${message.user_name}
                      </div>
                      <div class= upper-message__date>
                        ${message.created_at}
                      </div>
                    </div>
                    <div class= lower-message>
                      <div class= lower-message__content>
                        ${message.content}
                      </div>
                        ${MessageImage}
                    </div>
                  </div>`
  
      return html;
   }
  
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      console.log(data)

      $('.main').append(html);
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.main').animate({scrollTop: $('.main')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('エラー');
      $('.form__submit').prop('disabled', false);
    })
    }) 
  })
})