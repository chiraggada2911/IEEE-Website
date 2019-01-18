$(document).ready(function(){
  $(button).click(function(){
    $.ajax({
      type:'GET',
      url:'/home'
    })
  })
})
