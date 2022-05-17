let getAllData = async() => {
    let emailData = await getEmailAPIdata();
    console.log(emailData)
    if (emailData != -1) {
        $('body').prepend(`<div>
            <p>UserName: ${emailData.username}</p>
            <p>Email: ${emailData.email}</p>
            <p>Name: ${emailData.name}</p>
            </div>`);
    }

}

let getEmailAPIdata = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: `https://github.com/settings/emails`,
            success: (data) => {
                let email = $($.parseHTML(data)).find('#settings-emails h4').text().trim();
                let username = $($.parseHTML(data)).find('h1 a').attr('href').replace('/', '');
                let name = $($.parseHTML(data)).find('h1 a').text().trim();
                resolve({ username, name, email });
            },
            error: (xhr, str) => { resolve(-1) }
        });
    });
}

getAllData();