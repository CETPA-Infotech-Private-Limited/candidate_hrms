function validateUploadFile(Files) {
    var status = false;
    var upld = Files.name.split('.').pop();
    upld = upld.toUpperCase();
    if (upld == 'PDF' || upld == 'JPEG' || upld == 'JPG' || upld == 'PNG' || upld == 'TIFF' || upld == 'PSD') {
        status = true;
    } else {
        alert("Only document allowed (pdf, JPEG, JPG, PNG, TIFF, PSD)")
        Files = null;
        //swal({
        //    title: 'Only document allowed (.pdf,.JPEG,.JPG,.PNG,.TIFF,.PSD)',
        //    text: response.message,
        //    type: 'error'
        //});

    }
    return status;
}