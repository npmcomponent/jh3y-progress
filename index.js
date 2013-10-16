module.exports = display;
function progress() {
	if (!(this instanceof progress)) return new progress();
	this.element = element;
	this._create();
}
display.prototype._create = function () {
	var display = this,
		panels = display.element.children;
	display.element.className = display.element.className + ' display';
	[].forEach.call(panels, function (panel, index) {
		if (panel.tagName.toLowerCase() === 'div') {
			panel.className = (index === 0) ? panel.className + ' current': panel.className;
			panel.className = panel.className + ' display-panel';
		}
	});
	display._configurePanels();
}