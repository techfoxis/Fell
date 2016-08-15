'use strict'

require('terminal-colors');

class Logger {
    	
    constructor(preferences) {
		preferences = preferences || {}
    	this.name = preferences.name || 'logger';
		this.detailIdentifier = preferences.detailIdentifier || '|'
		this.showColor = this.shouldBeEnabled(preferences.showColor);
		this.showTime = this.shouldBeEnabled(preferences.showTime);
		this.showLabel = this.shouldBeEnabled(preferences.showLabel);
	}
	
	shouldBeEnabled(value) {
		if(typeof value == 'undefined') return true;
		return value;
	}
	
	log(message, type, details, label, color) {		
		label = label || type || this.name;
		color = color || null;
		
		switch(type) {
			case 'info':
				console.log(this.createMessage(message, type, details, label, color || '.blue'));
				console.log(this.createDetails(details));
				break;
			case 'success':
				console.log(this.createMessage(message, type, details, label, color || '.green'));
				console.log(this.createDetails(details));
				break;
			case 'warning':
				console.log(this.createMessage(message, type, details, label, color || '.lightRed'));
				console.log(this.createDetails(details));
				break;
			case 'error':
				console.log(this.createMessage(message, type, details, label, color || '.red'));
				console.log(this.createDetails(details));
				break;
			case 'detail':
				console.log(this.createDetails(message, color));
				console.log(this.createDetails(details));
				break;
			default:
				console.log(this.createMessage(message, type, details, label, color));
				console.log(this.createDetails(details));
				break;
		}
	}
	
	createMessage(message, type, details, label, color) {
		color = color || ''	
		return `${this.createTimeStamp()}${this.createLabel(label)}${this.showColor ? eval('message' + color) : message}`
	}
	
	createDetails(details, color) {
		var output = [];
		color = color || ''
		if(typeof details == 'string') details = [details];
		for(var detail in details) {
			output.push(` ${this.detailIdentifier} ${this.showColor ? eval('details[detail]' + color) : details[detail]}`);
		}
		return output.join('\n');
	}
	
	createTimeStamp() {
		var date = new Date();
		if(!this.showTime) return ''
		return `[${date.toLocaleTimeString()}] `
	}
	
	createLabel(label) {
		if(!this.showLabel) return ''
		return `[${label}] `
	}
	
	static create(preferences) {
		let object = new Logger(preferences);
		return object;
	}
    
}

module.exports = Logger;