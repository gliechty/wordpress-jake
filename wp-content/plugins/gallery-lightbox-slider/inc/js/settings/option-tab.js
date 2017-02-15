var glgloader;

jQuery(document).ready(function($) {
	
	// Animate Settings Page on Load
	jQuery(".panelloader").removeClass("ploader").hide();
	jQuery("#page-settings").fadeIn(1000);
	
	// Apply WP ColorPicker
	$('#glg_gallery_overlay_color').wpColorPicker();
	
	// Checkbox event
	$('input[type=checkbox]').change(function () {
		
		if ($(this).attr("checked")) {
			
			$(this).val('active');
			$('.'+$(this).attr('id')).val('active');

        	return;
			
    	} else {
		
			$(this).val('off');
			$('.'+$(this).attr('id')).val('off');

        	return;
			
		}
		
	});
	
	
	// Submit handler
	$(".glg_form_submit").bind("click",function (e) {
		
		e.preventDefault();
		
		$('.glg_save_status').hide();
		
		var formData = $('#'+$(this).data('formname')).serializeArray();
		
		glg_form_save( formData, $(this).data('formname'), $(this).data('nonce'), $(this) );
		
		});
		
		
	// SAVE DATA AJAX	
	function glg_form_save( fdata, fid, nnc, smbt ) {
		
		jQuery('.set_'+fid).css('color', '#148919');
		jQuery('.set_'+fid).hide();
	
		window.clearTimeout(glgloader);
	
		jQuery(smbt).attr('disabled','disabled');
		jQuery('#loader_'+fid).addClass('button_loading');
	
		loading(fid);
	
		dat = {};
		dat['action'] = 'glg_ajax_save_settings';
		dat['fieldsdata'] = fdata;
		dat['security'] = nnc;
	
		jQuery.ajax({
			url: ajaxurl,
			type: 'POST',
			dataType: 'json',
			data: dat,
		
			success: function( response ) {
			
				switch ( response.ok ) { 
			
    				case true: 
				
					glg_cleanup(smbt, fid);

        			break;

				default:
			
				alert('Failed! Please refresh the page and try again.');
				glg_cleanup(smbt, fid);

				}
			
			// end success-		
			}
			
		// end ajax
		});

	
	}
	
	// Restore element to default
	function glg_cleanup( smbt, fid ) {
	
		$('#overlay').remove();
		jQuery(smbt).removeAttr('disabled');
		jQuery('#loader_'+fid).removeClass('button_loading');
		jQuery('.set_'+fid).fadeIn(500);
	
		glgloader = window.setTimeout(function() {
		
			jQuery('.set_'+fid).fadeOut();
	
		}, 4000);
	};


	// Create animate on Save
	function loading(fid) {
        // add the overlay with loading image to the page
        var over = '<div id="overlay">' +
            '<img id="loading">' +
            '</div>';
        $(over).appendTo('#'+fid);
    };
	
	
	// AJAX Get Free Plugins
	$('body').on('click', '.glg_ajax_caller', function(event){
		
		glg_ajax_caller_func($(this));

		event.preventDefault();
		
		});
		
		
	// RETRIEVE FREE PLUGINS LIST
	function glg_ajax_caller_func( elmnt ) {
		
		$(".glgloader").removeClass("glgloaderclass");	
		$('#'+elmnt.data('act')).empty().hide();
		$(".glgloader").fadeIn(300).addClass("glgloaderclass");
	
		dat = {};
		dat['action'] = elmnt.data('act');
		dat['security'] = elmnt.data('nonce');
	
		jQuery.ajax({
			url: ajaxurl,
			type: 'POST',
			data: dat,
		
			success: function( response ) {
				
				
				if ( response ) {
					
					$(".glgloader").removeClass("glgloaderclass").hide();
					$('#'+elmnt.data('act')).html(response).fadeIn(1000);

				} else {
					
					alert('Failed! Please refresh the page and try again.');
					
					}

			}
			
		// end ajax
		});

	
	}


});

// Option tabs
jQuery(function($) {
    $( "#option-tree-settings-api" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#option-tree-settings-api li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });

