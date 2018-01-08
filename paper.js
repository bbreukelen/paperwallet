var qrSize = 150,
  qrColor = "#000000",
  qrCorrLevel = QRCode.CorrectLevel.Q;


function closeHelp() {
	$(".help").hide();
}

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:1em; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function makeQR() {
  var el = $(this);
  setTimeout(function() {
    var id = el.attr("id"),
      qrEl = $("div.qr[name='" + id + "']"),
      value = el.val();

    qrEl.html("").css("padding",0);
    if (qrEl.length && value.length) {
      new QRCode(qrEl[0], {
        text: value,
        width: qrSize,
        height: qrSize,
        colorDark: qrColor || "#000000",
        colorLight: "#ffffff",
        correctLevel: qrCorrLevel,
        margin: 100
      });
      qrEl.css("padding", 5);
    }
  }, 0);
}

function printPage() {
  $(".hideonprint").hide();
  $("input, textarea").each(function(nr, el) {
    el = $(el);
    if (el.val() === "") { el.hide(); }
  });
  window.print();

  setTimeout(function() {
    $(".hideonprint, input, textarea").show();
  }, 0);
}

$(function() {
  $("textarea")
    .on("keydown", autosize)
    .on("keydown", makeQR);
  $("#printBut").on("click", printPage);
});
