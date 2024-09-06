export function Checkauth() {
    const token = localStorage.getItem('token');

    if (token) {
        return true;
    } else {
        return false;
    }
}


export function CheckauthAdmin() {
    const token = localStorage.getItem('admin');

    if (token == "kjasg823$%&%^$&$*$^$DGCVSDVW%C^£V%$34562546136v52cyeqrtfdf45") {
        return true;
    } else {
        return false;
    }
}
