let getAllData = () => {
    let intr = setInterval(async() => {
        if ($('.s-user-card')) {
            let url = $('.s-user-card').attr('href');
            if (url) {
                let data = await getAPIdata(url.split('/')[2]);
                console.log(data)
                $('body').prepend(`<div>
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>URL: https://stackoverflow.com/${url}</p>
                </div>`)
            }

            clearInterval(intr);
        }
    }, 1000)

}

let getAPIdata = (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: `https://stackoverflow.com/users/mylogins/${id}`,
            success: (data) => {
                let email = $($.parseHTML(data)).find('.js-login-info .fs-body2')[0].textContent.trim();
                let name = $($.parseHTML(data)).find('.fs-headline2').text().trim();
                resolve({ name, email });
            },
            error: (xhr, str) => { resolve(-1) }
        });
    });
}

getAllData();