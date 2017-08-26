function enableFields(form) {
	
	var atividade = parseInt(getValue("WKNumState"));
	enableUtils.disableAllFields(form);
	
	switch (atividade) {
		case 0:
			enableUtils.enableRequesterFields(form);
			break;
		case 1:
			enableUtils.enableRequesterFields(form);
			break;
		case 4:
			enableUtils.enableRequesterFields(form);
			break;
		case 5:
			enableUtils.enableApproverFields(form);
			break;
	}
	
	
	
}

var enableUtils = (function() {
	return {
		
		disableAllFields: function(form) {
			form.setEnabled("numSolicitacao", false);
			form.setEnabled("solicitante", false);
			form.setEnabled("dataAbertura", false);
			form.setEnabled("produto", false);
			form.setEnabled("valor", false);
			form.setEnabled("quantidade", false);
			form.setEnabled("total", false);
			form.setEnabled("aprovado", false);
		},
		
		enableRequesterFields: function(form) {
			form.setEnabled("produto", true);
			form.setEnabled("valor", true);
			form.setEnabled("quantidade", true);
			form.setEnabled("total", true);
		},
		
		enableApproverFields: function(form) {
			form.setEnabled("aprovado", true);
		}
	}
})();