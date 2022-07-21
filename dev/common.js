function navigationAnchor() {
  var window_top = $(window).scrollTop();
  var div_top = $('#navigation-anchor').offset().top;
  if (window_top > div_top) $('#navigation-bar').addClass('anchor')
  else $('#navigation-bar').removeClass('anchor');
}

function insertInfoPane() {
    var el = document.getElementById('info-pane');
    if (el) {
        var html = '';
        
         // adoption
        html += '<div id="sidebar-integration">';
        html += '<h3>Adoption</h3>';
        html += '<a href="http://www.dreamworksanimation.com/" target="_blank"><h4 class="dreamworks"><span></span></h4></a>';
        html += '<a href="https://animallogic.com/" target="_blank"><h4 class="animalLogic"><span></span></h4></a>';
        html += '</div>';

        // contact info
        html += '<div id="sidebar-contact">';
        html += '<h3>Contacts</h3>';
        html += '<p><a href="mailto:usdmanager@dreamworks.com">usdmanager@dreamworks.com</a></p>';
        html += '</div>';
        
        el.innerHTML = html;
    }
}

window.onload = insertInfoPane;

$(function() {
  $(window).scroll(navigationAnchor);
  navigationAnchor();
});
