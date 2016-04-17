$(document).ready(function() {

  var url = '../easywigajax.php';
  var autosaveURL = '';
  var publishURL = '';
  var textArea = document.getElementById('easywig-textarea');
  var title = document.getElementById('easywig-title');

  //Make the iFrame editable!
  var easywigTextarea = document.getElementById('easywigTextarea');
  easywigTextarea.contentDocument.designMode = "On";

  $('#bold').click(function() {
    easywigTextarea.contentDocument.execCommand('bold', false, null);
  });

  $('#italic').click(function() {
    easywigTextarea.contentDocument.execCommand('italic', false, null);
  });

  $('#link').click(function() {
    var link = prompt("Insert link with http:// before:");
    easywigTextarea.contentDocument.execCommand('createLink', false, link);
  });

  $('#unlink').click(function() {
    easywigTextarea.contentDocument.execCommand('unlink', false, null);
  });

  $('#aLeft').click(function() {
    easywigTextarea.contentDocument.execCommand('justifyLeft', false, null);
  });

  $('#aCenter').click(function() {
    easywigTextarea.contentDocument.execCommand('justifyCenter', false, null);
  });

  $('#aRight').click(function() {
    easywigTextarea.contentDocument.execCommand('justifyRight', false, null);
  });

  $('#strikeThrough').click(function() {
    easywigTextarea.contentDocument.execCommand('strikeThrough', false, null);
  });

  $('#list').click(function() {
    easywigTextarea.contentDocument.execCommand('insertUnorderedList', false, null);
  });

  $('#font-size').change(function() {
    var fontSize = $('#font-size option:selected').val();
    easywigTextarea.contentDocument.execCommand('formatBlock', false, fontSize);
  });

  $('#underlineColor').change(function() {
    var underlineColor = $(this).val();
    easywigTextarea.contentDocument.execCommand('foreColor', false, underlineColor);
  });

  $('#backgroundColor').change(function() {
    var backgroundColor = $(this).val();
    easywigTextarea.contentDocument.execCommand('backColor', false, backgroundColor);
  });


  function WordCount(str) {
    var wordAmount = str.split(" ").length;
    return wordAmount;
  }

  $('#easywig-submit').click(function() {
    var titleVal = title.value;
    var textVal = textArea.value;
    textVal = window.frames['content'].document.body.innerHTML;
    //alert("Title:" + titleVal + ". Body: " + textVal);
    $.ajax({url: url + '?type=publish', data: {title: titleVal, text: textVal}, type: 'POST'});
  });

  //Autosave on Keyup
  var iframeBody = $('iframe').contents().find('body');
  iframeBody.on('keyup', function() {
    var titleVal = title.value;
    var textVal = textArea.value;
    textVal = window.frames['content'].document.body.innerHTML;
    $.ajax({url: url + '?type=keyup', data: {title: titleVal, text: textVal}, type: 'POST'});

    var countedWords = WordCount(textVal);
    var wordCountOutput = document.getElementById('easywig-word-count');
    wordCountOutput.innerHTML = countedWords;
  });

  $('#easywig-textarea').on('keyup', function() {
    var titleVal = title.value;
    var textVal = textArea.value;
    $.ajax({url: url + '?type=keyup', data: {title: titleVal, text: textVal}, type: 'POST'});

    var countedWords = WordCount(textVal);
    var wordCountOutput = document.getElementById('easywig-word-count');
    wordCountOutput.innerHTML = countedWords;
  });

  $('#code').click(function() {
    $('#easywig-textarea').css("display", "block");
    $('#easywigTextarea').css("display", "none");
    var graburl = url + '?type=grab';
    $.ajax({url: graburl, type: 'GET', success: function(content) {
      $('#easywig-textarea').html(content);
    }});
  });

  $('#visual').click(function() {
    $('#easywig-textarea').css("display", "none");
    $('#easywigTextarea').css("display", "block");
    var graburl = url + '?type=grab';
    $.ajax({url: graburl, type: 'GET', success: function(content) {
      window.frames['content'].document.body.innerHTML = content;
    }});
  });

  $('#resize').click(function() {
    $('#easywig-container').fadeIn(1000, function() {
      $('#easywig-container').toggleClass("bigBox");
    });
  });





});
