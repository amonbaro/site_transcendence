function previewImage(event)
{
	const input = event.target;
	const reader = new FileReader();

	reader.onload = function()
	{
		const imagePreview = document.getElementById('imagePreview');
		imagePreview.src = reader.result;
		imagePreview.style.display = 'block';
	};
	if (input.files && input.files[0])
	{
		reader.readAsDataURL(input.files[0]);
	}
}

window.onload = function()
{
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('profileImage').value = '';
    document.getElementById('imagePreview').style.display = 'none';
};
