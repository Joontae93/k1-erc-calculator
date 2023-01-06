/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */
export function select(selector, all = false) {
	return all === false
		? document.querySelector(selector)
		: document.querySelectorAll(selector);
}

// As Part of a Team
export function myCopyright() {
	const copyright = document.getElementById('copyright');
	const thisYear = new Date().getFullYear();
	copyright.innerHTML = `<p>&copy; ${thisYear} K.J. Roelke <br/> All Rights Reserved.</p>`;
}
