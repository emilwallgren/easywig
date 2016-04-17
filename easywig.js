$(document).ready(function() {

  /******** SETTINGS *********/

  //Set autosave/keyup url
  var url = '../easywigajax.php';
  //Set publish url

  /***************************/

  //Create html
  $("#easywig").append('<div id="easywig-title-container"><label for="title" id="easywig-label">Title</label><br><input type="text" name="title" id="easywig-title"></div><div id="easywig-container"><label for="content" id="easywig-label">Content</label><br><div id="easywig-buttons"><button id="bold"><i class="fa fa-bold"></i></button><button id="italic"><i class="fa fa-italic"></i></button><button id="link"><i class="fa fa-link"></i></button><button id="unlink"><i class="fa fa-unlink"></i></button><button id="aLeft"><i class="fa fa-align-left"></i></button><button id="aCenter"><i class="fa fa-align-center"></i></button><button id="aRight"><i class="fa fa-align-right"></i></button><button id="strikeThrough"><i class="fa fa-strikethrough"></i></button><button id="list"><i class="fa fa-list"></i></button><i class="fa fa-underline colors"><input type=color name="underlineColor" id="underlineColor"></i><i class="fa fa-paint-brush colors"><input type=color name="backgroundColor" id="backgroundColor"></i><select id="font-size"><option value="p">Paragpraph</option><option value="H1">Heading 1</option><option value="H2">Heading 2</option><option value="H3">Heading 3</option><option value="H4">Heading 4</option><option value="H5">Heading 5</option></select><i class="fa fa-th-large" id="resize"></i><br><button id="visual">Visual</button><button id="code">Code</button></div><textarea id="easywig-textarea" style="display:none;"></textarea><iframe id="easywigTextarea" name="content"></iframe><div id="easywig-text-counter"><p>Word Count: <span id="easywig-word-count">0</span></p></div></div><button id="easywig-submit">Publish</button>');

   /******** CSS *********/
  //Create css for #easywig
  $('#easywig').css({
    "width" : "800px",
    "height" : "630px",
    "background-color" : "#f2f2f2",
    "border-radius" : "5px",
    "display" : "block",
    "margin" : "0 auto",
    "padding" : "20px",
    "margin-bottom" : "30px"});

  //Create css for #easywig-title-container
  $('#easywig #easywig-title-container').css({
    "width" : "100%",
    "display" : "block",
    "margin" : "0 auto",
    "margin-bottom" : "30px"});

  //Create css for #easyig-label
  $('#easywig #easywig-title-container #easywig-label').css({
    "font-size" : "20px"});

  //Create css for #easywig-title
  $('#easywig #easywig-title-container #easywig-title').css({
    "width" : "100%",
    "border-color" : "transparent"});

  //Create css for #easywig-container
  $('#easywig #easywig-container').css({
    "width" : "100%",
    "display" : "block",
    "margin" : "0 auto",
    "margin-bottom" : "30px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-label').css({
    "font-size" : "20px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons').css({
    "width" : "100%",
    "height" : "80px",
    "background-color" : "#e6e6e6"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons button').css({
    "width" : "30px",
    "height" : "30px",
    "margin-left" : "10px",
    "margin-right" : "10px",
    "margin-top" : "5px",
    "margin-bottom" : "5px",
    "border-radius" : "5px",
    "border" : "1px solid gray",
    "background-color": "white"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons button i').css({
    "font-size" : "17px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons button i input').css({
    "width" : "22px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons .colors').css({
    "margin-left" : "10px",
    "margin-right" : "10px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons .colors input').css({
    "width" : "22px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons #visual, #easywig #easywig-container #easywig-buttons #code').css({
    "width" : "210px",
    "height" : "24px",
    "text-align" : "center",
    "margin-left" : "10px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-buttons #resize').css({
    "font-size" : "22px",
    "margin-left" : "33px"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywigTextarea').css({
    "width" : "100%",
    "height" : "400px",
    "background-color" : "white",
    "border-color" : "transparent",
    "border" : "none"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-textarea').css({
    "width" : "100%",
    "height" : "400px",
    "resize" : "none",
    "background-color" : "white",
    "border" : "none"});

  //Create css for #easywig
  $('#easywig #easywig-container #easywig-text-counter').css({
    "width" : "100%",
    "height" : "20px",
    "margin-top" : "-15px",
    "background-color" : "#e6e6e6"});

  //Create css for #easywig
  $('#easywig #easywig-submit').css({
    "width" : "100%",
    "display" : "block",
    "margin" : "0 auto",
    "background-color" : "#0099cc",
    "color" : "white",
    "font-size" : "20px",
    "text-align" : "center",
    "border-color" : "transparent",
    "margin-top" : "-30px"});

  //Create css for hover on submit-button
  $('#easywig #easywig-submit:hover').css({
    "background-color" : "#0086b3"});

  //Create css for #blog
  $('#blog').css({
    "width" : "600px",
    "min-height" : "500px",
    "background-color" : "white",
    "display" : "block",
    "margin" : "0 auto",
    "-webkit-box-shadow" : "0px 3px 29px 0px rgba(0, 0, 0, 0.75)",
    "-moz-box-shadow" : "0px 3px 29px 0px rgba(0, 0, 0, 0.75)",
    "box-shadow" : "0px 3px 29px 0px rgba(0, 0, 0, 0.75)"});

  //Create css for .bigBox
  $('.bigBox').css({
    "position" : "fixed",
    "display" : "block",
    "z-index" : "1000",
    "top" : "-18px",
    "right" : "0",
    "bottom" : "0",
    "left" : "0",
    "height" : "100vh"});

  $('.bigBox label').css({
    "display" : "none"});

  $('.bigBox #easywig-textarea, .bigBox #easywigTextarea').css({
    "height" : "85vh !important"});
  
  /***************************/

  //Define variables for textarea, title and iframe
  var textArea = document.getElementById('easywig-textarea');
  var title = document.getElementById('easywig-title');
  var easywigTextarea = document.getElementById('easywigTextarea');

  //Make the iFrame editable!
  easywigTextarea.contentDocument.designMode = "On";

  //Make text bold on click
  $('#bold').click(function() {
    easywigTextarea.contentDocument.execCommand('bold', false, null);
  });

  //Make text italic on click
  $('#italic').click(function() {
    easywigTextarea.contentDocument.execCommand('italic', false, null);
  });

  //Make link on click with help of prompt
  $('#link').click(function() {
    var link = prompt("Insert link with http:// before:");
    easywigTextarea.contentDocument.execCommand('createLink', false, link);
  });

  //Unlink on click
  $('#unlink').click(function() {
    easywigTextarea.contentDocument.execCommand('unlink', false, null);
  });

  //Align text to the left on click
  $('#aLeft').click(function() {
    easywigTextarea.contentDocument.execCommand('justifyLeft', false, null);
  });

  //Align text to the center on click
  $('#aCenter').click(function() {
    easywigTextarea.contentDocument.execCommand('justifyCenter', false, null);
  });

  //Align text to the right on click
  $('#aRight').click(function() {
    easywigTextarea.contentDocument.execCommand('justifyRight', false, null);
  });

  //Strikthrough text on click
  $('#strikeThrough').click(function() {
    easywigTextarea.contentDocument.execCommand('strikeThrough', false, null);
  });

  //Make Unordered List on click
  $('#list').click(function() {
    easywigTextarea.contentDocument.execCommand('insertUnorderedList', false, null);
  });

  //Change font-size on select
  $('#font-size').change(function() {
    var fontSize = $('#font-size option:selected').val();
    easywigTextarea.contentDocument.execCommand('formatBlock', false, fontSize);
  });

  //Change color of text
  $('#underlineColor').change(function() {
    var underlineColor = $(this).val();
    easywigTextarea.contentDocument.execCommand('foreColor', false, underlineColor);
  });

  //Change background color of text
  $('#backgroundColor').change(function() {
    var backgroundColor = $(this).val();
    easywigTextarea.contentDocument.execCommand('backColor', false, backgroundColor);
  });

  //Create function which calulates words in string to use in later functions
  function WordCount(str) {
    var wordAmount = str.split(" ").length;
    return wordAmount;
  }

  //Create and use values depending on what is saved and send them to external file via Ajax
  $('#easywig-submit').click(function() {
    var titleVal = title.value;
    var textVal = textArea.value;
    textVal = window.frames['content'].document.body.innerHTML;
    //alert("Title:" + titleVal + ". Body: " + textVal);
    $.ajax({url: url + '?type=publish', data: {title: titleVal, text: textVal}, type: 'POST'});
  });

  //Autosave iframe on Keyup
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

  //Autosave textarea(code-editor) on keyup
  $('#easywig-textarea').on('keyup', function() {
    var titleVal = title.value;
    var textVal = textArea.value;
    $.ajax({url: url + '?type=keyup', data: {title: titleVal, text: textVal}, type: 'POST'});

    var countedWords = WordCount(textVal);
    var wordCountOutput = document.getElementById('easywig-word-count');
    wordCountOutput.innerHTML = countedWords;
  });

  //Display code editor and remove iframe on click
  $('#code').click(function() {
    $('#easywig-textarea').css("display", "block");
    $('#easywigTextarea').css("display", "none");
    var graburl = url + '?type=grab';
    $.ajax({url: graburl, type: 'GET', success: function(content) {
      $('#easywig-textarea').html(content);
    }});
  });

  //Display iframe and remove code editor on click
  $('#visual').click(function() {
    $('#easywig-textarea').css("display", "none");
    $('#easywigTextarea').css("display", "block");
    var graburl = url + '?type=grab';
    $.ajax({url: graburl, type: 'GET', success: function(content) {
      window.frames['content'].document.body.innerHTML = content;
    }});
  });



  //Display full-page editor on click
  $('#resize').click(function() {
    $('#easywig-container').toggleClass("bigBox");
  });
  //Display full-page editor on click
  /*
  $('#resize').click(function() {
    $('#easywig-container').fadeIn(1000, function() {
      $('#easywig-container').toggle(function() {
        $('#easywig #easywig-container').css({
          "position" : "fixed",
          "display" : "block",
          "z-index" : "1000",
          "top" : "-18px",
          "right" : "0",
          "bottom" : "0",
          "left" : "0",
          "height" : "100vh"});

        $('#easywig-container label').css({
          "display" : "none"});

        $('#easywig-container #easywig-textarea, #easywig-container #easywigTextarea').css({
          "height" : "85vh !important"});
      }, function() {
        $('#easywig #easywig-container').css({
          "position" : "static",
          "z-index" : "",
          "top" : "",
          "right" : "",
          "bottom" : "left",
          "left" : "",
          "width" : "800px",
          "height" : "630px",
          "background-color" : "#f2f2f2",
          "border-radius" : "5px",
          "display" : "block",
          "margin" : "0 auto",
          "padding" : "20px",
          "margin-bottom" : "30px"});

        $('#easywig #easywig-container label').css({
          "display" : "block"});

        $('#easywig #easywig-container #easywig-textarea, #easywig-container #easywigTextarea').css({
          "height" : "400px"});
      });
    });
  }); */






});
