/**
 * 1. Cambiar tabs
 * 2. Labels se mueven en función de si el elemento está activo (focus) o si no lo está, pero tiene contenido
 * 3. Validación
 */
$(document).ready(function() {
	function cambiaTabs() {
		if ($(this).attr('id') === 'login-tab') {
			$('#login').show();
			$('#signup').hide();
		} else {
			$('#login').hide();
			$('#signup').show();
		}
		$('.tab.active').removeClass('active');
		$(this).parent().addClass('active');
	}

	$('#login-tab').click(cambiaTabs);
	$('#signup-tab').click(cambiaTabs);

	$('input').keydown(function() {
		if ($(this).val().length > 0) {
			$(this).prev('label').addClass('active');
		} else {
			$(this).prev('label').removeClass('active');
		}
	});

	$('input').focus(function() {
		$(this).prev('label').addClass('highlight');
	});

	$('input').blur(function() {
		$(this).prev('label').removeClass('highlight');
	});

});
