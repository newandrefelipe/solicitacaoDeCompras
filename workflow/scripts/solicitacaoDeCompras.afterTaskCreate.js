function afterTaskCreate(colleagueId) {
	
	log.info("##################### afterTaskCreate #####################");
	
	var numeroProcesso = getValue("WKNumProces");
	var sequenceId = getValue("WKCurrentState");
	
	log.info("############ numeroProcesso: " + numeroProcesso);
	hAPI.setCardValue("numSolicitacao", numeroProcesso);
	
}