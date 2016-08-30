$(function(){
	$("#belong_group").select2({
		placeholder: '请选择所属组',
		allowClear: true
	}).on('select2-open', function(){
		$(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
	});
	$("#clientType").selectBoxIt().on('open', function()
		{									
			$(this).data('selectBoxSelectBoxIt').list.perfectScrollbar();
		});
	 
})