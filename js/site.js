function displayMessage() {
    let msg = document.getElementById('message').value;

    Swal.fire(
        {
            backdrop: false,
            title: 'Backtracker',
            text: msg,
        }
    );
}