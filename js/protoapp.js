$(function () {

  /**
   * settings
   */
  var $main = $('#prod-line');
  var $nav = $('#prod-line-nav');
  var $navItem = $nav.find('.prod-line__nav-item');
  var $protos = $('#prod-line-protos');
  var $bgs = $('#prod-line-bgs');
  var activeClass = 'is-active';
  var visibleClass = 'is-visible';
  var startIndex = 1;
  var offsetIndex = 2;
  var totalSteps = 6;
  var endIndex = startIndex + totalSteps;

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
    index = index < 0 ? 0 : index;
    $main.attr('data-index', index);

    $.each([ $navItem, $protos.children(), $bgs.children() ], function () {
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
    anchors: [ '', 'etapa-1', 'etapa-2', 'etapa-3', 'etapa-4', 'etapa-5', 'etapa-6', '' ],
    onLeave: function (currentIndex, nextIndex, direction) {
      toggleVisibility(isFixedHidden(nextIndex));
      updateState(direction === 'down' ? nextIndex - offsetIndex : currentIndex - offsetIndex - startIndex);
    }
  });
});
