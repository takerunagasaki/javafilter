/* global $ */
let searchWord;

$(function () {
  searchWord = function(){
    var searchText = $(this).val(), // 検索ボックスに入力された値
        targetText;

    $('.searchImg li').each(function() {  //searchImg クラスのliを要素数繰り返す
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        $(this).removeClass('ContentsHide');
      } else {
        $(this).addClass('ContentsHide');
      }
    });
  };

  // searchWordの実行
  $('#SertchT').on('input', searchWord);  //inputに入力されたら
});