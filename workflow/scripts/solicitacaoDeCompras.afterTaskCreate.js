function afterTaskCreate(colleagueId) {
	
	log.info("##################### afterTaskCreate #####################");
	
	var numeroProcesso = getValue("WKNumProces");
	var sequenceId = getValue("WKCurrentState");
	
	log.info("############ numeroProcesso: " + numeroProcesso);
	log.info("############ sequenceId    : " + sequenceId);
	log.info("############ colleagueId   : " + colleagueId);
	
	hAPI.setCardValue("numSolicitacao", numeroProcesso);
	
	// Switch nao funcionou pois o sequenceId eh object
	
	// Aprovacao
	if (sequenceId == 5) {
		log.info("### ENTROU NO 5 IF");
		sendEmail(sequenceId, colleagueId);
	}
	
}