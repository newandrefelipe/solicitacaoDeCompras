function sendEmail(sequenceId, colleagueId) {
	
	log.info("########### sendEmail ###########");
	
	if (sequenceId == 5) {
		log.info("### ENTROU NO IF");
		sendEmailUtils.notifyApprover(colleagueId);
	}
}

var sendEmailUtils = (function() {
	return {
		notifyApprover: function(colleagueId) {
			log.info("#### notifyApprover ####");
			
			//Monta mapa com parâmetros do template
		    var parametros = new java.util.HashMap();
		    parametros.put("NR_SOLICITACAO", hAPI.getCardValue("numSolicitacao"));
		    parametros.put("NM_SOLICITANTE", hAPI.getCardValue("solicitante"));
		    parametros.put("DATA_ABERTURA", hAPI.getCardValue("dataAbertura"));
		    parametros.put("PRODUTO", hAPI.getCardValue("produto"));
		    parametros.put("VALOR_UNITARIO", hAPI.getCardValue("valor"));
		    parametros.put("QUANTIDADE", hAPI.getCardValue("quantidade"));
		    parametros.put("VALOR_TOTAL", hAPI.getCardValue("total"));
		    
		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Nova solicitação de compras aguardando sua aprovação");
		 
		    //Monta lista de destinatários
		    var destinatarios = new java.util.ArrayList();
		    destinatarios.add(colleagueId);
		    
		    //Envia e-mail
		    // notifier.notify("MATRICULA-REMETENTE", "CODIGO-TEMPLATE", parametros, destinatarios, "text/html");
		    notifier.notify("usuario.integrador", "tplsolicitacaoDeComprasAprovacao-pt", parametros, destinatarios, "text/html");
		}
	}
})();