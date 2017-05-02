var middle;  // ссылка н основную (средеуюю часть документа) 


/*
======================================
Скрипт для растягивания среденей части
на всю досткпнуб высоту
======================================
*/
function stretch() {
	var bodyHeight = $('body').outerHeight();
	var headerHeight = $('.header').outerHeight();
	var footerHeight = $('.footer').outerHeight();

	middle.css({
		"height": bodyHeight - headerHeight - footerHeight + 'px'
	});
}

/*
===========================================
расстановка отсупов в иерархии документов
===========================================
*/
function indentTable() {
	$('.docs__tb__body tr[data-nested-level]').each(function() {
		var $this = $(this);
		var level = $this.data('nested-level');
		$this
			.find('td:first-child')
			.css({
				"padding-left": (level)*20 + 8 +'px'
			})
	})
}


$(function() {
	middle = $('.middle');
	stretch();
	indentTable();
})



$(window).resize(function() {
	stretch();
})




