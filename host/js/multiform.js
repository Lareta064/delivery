$(document).ready(function () {

	const inputsWrapper = document.querySelector('.nc-upload-new-files');
	const fileInputItem = inputsWrapper.querySelectorAll('.hidden-fileInput');

	for (let inputEl of fileInputItem) {
		inputEl.addEventListener('change', function () {
			this.nextElementSibling.classList.add('active')
			console.log(555);


		})
	}

})