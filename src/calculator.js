class ERCCalculator {
	erc = 0;
	#taxYear = 0;
	employeeCount = 0;
	constructor() {
		console.log('Ready to math...');
		this.#handeYearChange();
	}
	#handeYearChange() {
		const year = document.querySelectorAll('input[type="radio"]');
		year.forEach((radio) => {
			radio.addEventListener('change', (e) => {
				this.#taxYear = this.updateTextLabel(e.target.value);
			});
		});
	}
	calcSavings() {
		this.#showOutput(this.#getReturn(this.#taxYear));
	}
	#getReturn(year) {
		this.employeeCount = +document.querySelector('#employee-count').value;
		const potentialReturn = 1e4 * this.employeeCount;
		const initialLoan = +document.getElementById('pppLoan').value;
		this.erc = (potentialReturn - initialLoan) * (2021 === year ? 0.7 : 0.5);
		return year;
	}
	#showOutput(year) {
		const savings = document.querySelector('.output__savings');
		let output;
		if (this.erc <= 0)
			output = '<p>You are not eligible for the Employee Retention Credit.</p>';
		else {
			const n = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(this.erc);
			this.erc = n;
			output =
				'2021' == year
					? `<p>Potential Savings: <strong>${this.erc}</strong> per quarter!</p>`
					: `<p>Potential Savings: <strong>${this.erc}!</strong></p>`;
		}
		savings.innerHTML = output + '<input type="reset" class="reset">';
		document.querySelector('.reset').addEventListener('click', () => {
			(savings.innerHTML = 'Fill out the form to find out!'), (erc = 0);
		});
	}
	updateTextLabel(yearSelection) {
		const textLabel = document.querySelector('.container--employees label');
		if (yearSelection === '2020') {
			textLabel.textContent =
				'Number of Full-time, Non-Clergy employees on staff?';
		} else if (yearSelection === '2021') {
			textLabel.textContent =
				'Number of Full-time, Non-Clergy employees on staff in a single quarter?';
		}
		return +yearSelection;
	}
}

export const calculator = new ERCCalculator();
