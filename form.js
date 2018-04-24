/**
 * 1. Cambiar tabs
 * 2. Labels se mueven en función de si el elemento está activo (focus) o si no lo está, pero tiene contenido
 * 3. Validación
 */
$(document).ready(function() {
	$('#login-tab').click(function() {
		$('#signup').hide();
		$('#login').show();
		$('.tab.active').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('#signup-tab').click(function() {
		$('#login').hide();
		$('#signup').show();
		$('.tab.active').removeClass('active');
		$(this).parent().addClass('active');
	});

});
