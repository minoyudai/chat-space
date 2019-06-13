$(document).on('turbolinks:load', function() {
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
      var html = buildHTML(data)
      $('.main').append(html);
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.main').animate({scrollTop: $('.main')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop('disabled', false);
    })
  }) 
  
  $(function(){


  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id"); 
      // console.log(last_message_id);
      $.ajax({ 
        url: "api/messages", 
        type: 'get',
        dataType: 'json', 
        data: {last_id: last_message_id}
      })
      .done(function (messages) { 
      // console.log(messages)
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.main').append(insertHTML);
          $('.main').animate({scrollTop: $('.main')[0].scrollHeight}, 'fast');          
      })
    })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
  });
});
