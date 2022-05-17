let getAllData = () => {
    let url = location.href;
    let name = ($('.vcard-fullname')) ? $('.vcard-fullname').text().trim() : "N/A";
    let username = ($('.vcard-username')) ? $('.vcard-username').text().trim() : "N/A";
    let country = ($(`[itemprop="homeLocation"] span`)) ? $(`[itemprop="homeLocation"] span`).text().trim() : "N/A";
    if (name && username) {
        $('body').prepend(`<div>
                <p>Name: ${name}</p>
                <p>username: ${username}</p>
                <p>Country: ${country}</p>
                <p>URL: ${url}</p>
                </div>`);
    }




}

getAllData();