function displayFields(form,customHTML) {
	
	var mode = form.getFormMode();
	var atividade = parseInt(getValue("WKNumState"));
	
	if (mode == "ADD") {
		if (atividade == 0 || atividade == 1 || atividade == 4)
			displayUtils.setFieldsOnOpening(form);
	}
	
	
}

var displayUtils = (function() {
	return {
		
		setFieldsOnOpening: function(form) {
			
			// Preenche data de abertura
			var dataBase = new Date();
			var dia = dataBase.getDate();
			var mes = dataBase.getMonth() + 1;
			var ano = dataBase.getFullYear();
			var dataAbertura = dia + "/" + mes + "/" + ano;
			form.setValue("dataAbertura", dataAbertura);
			
			// Preenche nome solicitante
			var matriculaSolicitante = getValue("WKUser");
			var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", matriculaSolicitante, matriculaSolicitante, ConstraintType.MUST);
			var constraints = new Array(c1);
			var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);
			form.setValue("solicitante", colaborador.getValue(0, "colleagueName"));
			
			
		}
		
	}
})();