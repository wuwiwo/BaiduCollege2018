$(document).ready(function(){
	var $email=$("#email");
	var form__label__content=$(".form__label__content");
	var form__input__submit=$(".form__input__submit");
  $("#email").focus(function(){
  	$("#email_label").addClass('animated labelUp');
  });
  $("#email").blur(function(){
  	$("#email_label").removeClass('labelUp');
  });
  $("#password").focus(function(){
  	$("#password_label").addClass('animated labelUp');
  });
  $("#password").blur(function(){
  	$("#password_label").removeClass('labelUp');
  });
  if($(".form__label__content").value==""){
  	$(".form__label__content").addClass('animated labelUp');
  }
  else{
  	$(".form__label__content").removeClass('animated labelUp');
  }
  $(".btn").click(function(){
  	if($("input").val().length){
  		$(".btn").addClass('success');
  	}
  	else{
  		$(".btn").addClass('animated wobble');
		$(".btn").removeClass('success');
  	}
//	if(form__label__content.val()==""){
//		$(".btn").addClass('animated wobble');
//		$(".btn").removeClass('success');
//	}
//	if(form__label__content.val()!==""){
//		$(".btn").addClass('success');
//	}
  	
  })
});
