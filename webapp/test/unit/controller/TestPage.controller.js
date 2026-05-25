/*global QUnit*/

sap.ui.define([
	"ytestproject2/controller/TestPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TestPage Controller");

	QUnit.test("I should test the TestPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
