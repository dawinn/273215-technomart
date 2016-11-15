// глобально
var overlay = document.querySelector(".modal-overlay");
function windowOpen (popup_window) {
  popup_window.classList.add("modal-content-show");
  overlay.classList.add("overlay-show");
}
function windowClose (popup_window) {
  popup_window.classList.remove("modal-content-show");
  overlay.classList.remove("overlay-show");
}
// форма обратной связи
var feedback_link = document.querySelector(".feedback");
var feedback_popup = document.querySelector(".modal-content-feedback");
if (feedback_popup) {
  var feedback_close = feedback_popup.querySelector(".modal-content-close");
  var feedback_form = feedback_popup.querySelector("form");
  var feedback_form_name = feedback_form.querySelector("#id-name");
  var feedback_form_email = feedback_form.querySelector("#id-email");
  var feedback_form_mailbody = feedback_form.querySelector("#id-mailbody");

  var storage_name = localStorage.getItem("feedback_form_name");
  var storage_email = localStorage.getItem("feedback_form_email");
  var storage_mailbody = localStorage.getItem("feedback_form_mailbody");

  feedback_link.addEventListener("click", function(event) {
    event.preventDefault();
    windowOpen(feedback_popup);

    if (storage_name) {
      feedback_form_name.value = storage_name;
      if (storage_email) {
        feedback_form_email.value = storage_email;
        feedback_form_mailbody.focus();
      } else {
        feedback_form_email.focus();
      }
    } else {
      feedback_form_name.focus();
    }
  });
  feedback_close.addEventListener("click", function(event) {
      event.preventDefault();
      windowClose(feedback_popup);
  });

  feedback_form.addEventListener("submit",function(event){
    if (!feedback_form_name.value || !feedback_form_email.value || !feedback_form_mailbody.value) {
      event.preventDefault();
      feedback_popup.classList.remove("modal-error");
      feedback_popup.offsetWidth = feedback_popup.offsetWidth;
      feedback_popup.classList.add("modal-error");
    } else {
      localStorage.setItem("feedback_form_name", feedback_form_name.value);
      localStorage.setItem("feedback_form_email", feedback_form_email.value);
      localStorage.setItem("feedback_form_mailbody", feedback_form_mailbody.value);
    }
  });
}


// popup карта
var map_link = document.querySelector(".js-popup-map");
var map_popup = document.querySelector(".modal-content-map");
if (map_popup) {
  var map_close = map_popup.querySelector(".modal-content-close");

  map_link.addEventListener("click", function(event) {
    event.preventDefault();
    windowOpen(map_popup);
  });
  map_close.addEventListener("click", function(event) {
    event.preventDefault();
    windowClose(map_popup);
  });
}

// popup информер товара в корзине
var in_cart_links = document.querySelectorAll(".in-cart");
var in_cart_popup = document.querySelector(".modal-content-incart");
if (in_cart_popup) {
  var in_cart_close = in_cart_popup.querySelector(".modal-content-close");
  var contunue_close  = in_cart_popup.querySelector(" button.btn-close");

  for (var i = 0; i < in_cart_links.length; i++) {
    var in_cart_link = in_cart_links[i];
    in_cart_link.addEventListener("click", function(event) {
      event.preventDefault();
      windowOpen(in_cart_popup);
    });

    in_cart_close.addEventListener("click", function(event) {
      event.preventDefault();
      windowClose(in_cart_popup);
    });
    contunue_close.addEventListener("click", function(event) {
      event.preventDefault();
      windowClose(in_cart_popup);
    });
  }
}

// общие нажание ESC и клик по overlay

window.addEventListener("keydown", function(event) {
       if (event.keyCode === 27) {
         if (feedback_popup) {
           if (feedback_popup.classList.contains("modal-content-show")) {
             windowClose(feedback_popup);
             popup.classList.remove("modal-error");
           }
         }
         if (map_popup) {
           if (map_popup.classList.contains("modal-content-show")) {
             windowClose(map_popup);
           }
         }
         if (in_cart_popup) {
            if (in_cart_popup.classList.contains("modal-content-show")) {
              windowClose(in_cart_popup);
            }
         }
       }
     });
     overlay.addEventListener ("click", function(event){
       if (feedback_popup) {
         if (feedback_popup.classList.contains("modal-content-show")) {
           windowClose(feedback_popup);
           popup.classList.remove("modal-error");
         }
       }
       if (map_popup) {
         if (map_popup.classList.contains("modal-content-show")) {
           windowClose(map_popup);
         }
       }
       if (in_cart_popup) {
          if (in_cart_popup.classList.contains("modal-content-show")) {
            windowClose(in_cart_popup);
          }
       }
     });
