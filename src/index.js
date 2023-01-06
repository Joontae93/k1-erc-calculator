import '../sass/main.scss';
import { calculator } from './calculator';
import { handleFormData } from './formValues';
import { myCopyright } from './modules/utilities';
function init() {
	const btn = document.querySelector('button[type="submit"]');
	myCopyright();
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		calculator.calcSavings();
		handleFormData();
	});
}
init();
