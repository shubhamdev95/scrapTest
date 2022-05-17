let getAllData = () => {
    let url = location.href;
    let name = ($('.fs-headline2').text()) ? $('.fs-headline2').text().trim() : "N/A";
    let country = ($('.ps-relative .truncate.wmx2').text()) ? $('.ps-relative .truncate.wmx2').text().trim() : "N/A";
    if (name) {
        $('body').prepend(`<div>
                <p>Name: ${name}</p>
                <p>Place: ${country}</p>
                <p>URL: ${url}</p>
                </div>`);
    }




}

getAllData();