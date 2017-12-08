(
	function($) {

		$.extend({
			simba: {}
		});

		$.extend($.simba, {
			ajax: function(option) {
				$.ajax({
					type: option.type || 'GET',
					url: option.url || '',
					data: option.data || null,
					dataType: option.dataType || 'json',
					beforeSend: function(xhr) {

						if(option.beforeSend) option.beforeSend(xhr);

						//
						$("#loading").show()
					},
					complete: function(xhr) {

						if(option.complete) option.complete(xhr);

						$("#loading").hide()
					},
					success: function(fuck) {
						if(option.success) option.success(fuck);
					}
				});
			}
		});

	}

)(jQuery)