sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/Token'
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Token) {
		"use strict";

		return Controller.extend("teste.diogo.HTML5Module.controller.View1", {
			onInit: function () {
                var oView = this.getView();
                var oMultiInput1 = oView.byId("multiInput1");
                oMultiInput1.setTokens([
                ]);
                // add validator
                var fnValidator = function(args){
                    var text = args.text;

                    return new Token({key: text, text: text});
                };

                oMultiInput1.addValidator(fnValidator);
                this.parameters = []
            },
            
            tokenChange: function (oEvent) {
                
                this.parameters.push(oEvent.getParameters().addedTokens[0].mProperties.text)
                console.log(this.parameters)
            }
		});
	});
