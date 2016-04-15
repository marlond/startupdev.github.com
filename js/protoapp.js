$(function () {

  /**
   * settings
   */
  var $header = $('#home-section');
  var $main = $('#prod-line');
  var $nav = $('#prod-line-nav');
  var $navItem = $nav.find('.prod-line__nav-item');
  var $protos = $('#prod-line-protos');
  var $protoItems = $protos.find('img');
  var $bgs = $('#prod-line-bgs').children();
  var activeClass = 'is-active';
  var visibleClass = 'is-visible';
  var startIndex = 1;
  var offsetIndex = 2;
  var totalSteps = 6;
  var endIndex = startIndex + totalSteps;
  var hasChanged = false;

  /**
   * should navigation be visible
   * @param  {int}     index [current or next index]
   * @return {Boolean}       [is navigation visible]
   */
  function isFixedHidden (index) {
    return index === startIndex || index > endIndex;
  }

  /**
   * toggle the visibility of fixed items
   * @param {Boolean} isHidden [are they hidden?]
   */
  function toggleVisibility(isHidden) {
    $nav[ isHidden ? 'removeClass' : 'addClass' ](visibleClass);
    $protos[ isHidden ? 'removeClass' : 'addClass' ](visibleClass);
  }

  /**
   * update main state
   * @param {int} index [current index]
   */
  function updateState(index) {
    $header[ index < 0 ? 'removeClass' : 'addClass' ]('header--dark');
    index = index < 0 ? 0 : index;
    $main.attr('data-index', index);

    $.each([ $navItem, $protoItems, $bgs ], function () {
      $(this)
        .removeClass(activeClass)
        .eq(index)
        .addClass(activeClass);
    });
  }

  /**
   * navigation controls
   */
  $navItem.on('click', function () {
    $.fn.fullpage.moveTo(this.href.substr(1));
  });

  /**
   * initializer
   */
  $('#fullpage').fullpage({
    anchors: [ 'descubra', 'etapa-1', 'etapa-2', 'etapa-3', 'etapa-4', 'etapa-5', 'etapa-6', 'cases' ],
    onLeave: function (currentIndex, nextIndex, direction) {
      toggleVisibility(isFixedHidden(nextIndex));
      updateState(direction === 'down' ? nextIndex - offsetIndex : currentIndex - offsetIndex - startIndex);
    },
    afterLoad: function (anchorLink, index) {
      var isOff = anchorLink === 'cases';

      if (isOff) {
        $.fn.fullpage.setFitToSection(false);
        $.fn.fullpage.setAutoScrolling(false);
        hasChanged = true;
      } else if (hasChanged) {
        $.fn.fullpage.setFitToSection(true);
        $.fn.fullpage.setAutoScrolling(true);
        hasChanged = false;
      }
    }
  });
});
