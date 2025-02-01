let url1 = window.location.href;
let regexp = /\/(ru|uk)\//g;

let matchAll = url1.matchAll(regexp);
matchAll = Array.from(matchAll);

let firstMatch = matchAll[0];
lang = firstMatch[1];

if (lang == "ru") {
  jQuery(".bok_knopka").html("Заказать!");
  jQuery("#your-name-012").html("Ваше имя*");
  jQuery("#your-email-012").html("Ваш e-mail");
  jQuery("#your-tel-012").html("Телефон для связи*");
  jQuery("#your-message-012").html("Что нужно?");
  jQuery(".wpcf7-form-control.wpcf7-submit.has-spinner").html("Заказать");
  jQuery(".wpcf7-form-control.wpcf7-submit.has-spinner").val("Замовити!");
  jQuery(".wpcf7-form-control.wpcf7-submit.has-spinner").attr(
    "value",
    "Замовити!"
  );
  jQuery("#close-bok_011z > p > a").html("Закрыть окно");
}

/*
<input
  class="wpcf7-form-control wpcf7-submit has-spinner"
  type="submit"
  value="Замовити!"
>
  #shadow-root (user-agent)"Замовити!"
</input>;
*/
