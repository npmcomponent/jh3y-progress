module.exports = progress;
function progress(color) {
	if (!(this instanceof progress)) return new progress();
	this._color = (color !== undefined) ? color: '#00FF00';
	this._progress = 0;
	this._create();
}
progress.prototype._create = function () {
	var progress = this;
	progress.element = document.createElement('div');
	progress.element.className = 'progress';
	var progressIndicator = document.createElement('div');
	progressIndicator.className = 'progress-indicator';
	progressIndicator.style.background = progress._color;
	progress.element.appendChild(progressIndicator);
}
progress.prototype.setProgress = function (progress) {
	if (progress !== undefined && typeof(progress) === 'number' && progress <= 100 && progress >= 0) {
		this.element.querySelector('.progress-indicator').style.width = progress + '%';
		this._progress = progress;	
	} else {
		throw Error('progress: ERROR progress must be a number and between 0 and 100.')
	}
}
progress.prototype.setColor = function (color) {
	if (color !== undefined && typeof(color) === 'string') {
		this.element.querySelector('.progress-indicator').style.background = color;	
		this._color = color;
	} else {
		throw Error('progress: ERROR progress must be a string.')
	}
}
