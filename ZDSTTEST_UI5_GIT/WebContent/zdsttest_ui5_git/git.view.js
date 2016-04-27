sap.ui.jsview("zdsttest_ui5_git.git", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zdsttest_ui5_git.git
	*/ 
	getControllerName : function() {
		return "zdsttest_ui5_git.git";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zdsttest_ui5_git.git
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title 2",
			content: [
			
			]
		});
	}

});