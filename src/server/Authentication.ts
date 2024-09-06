

export function CheckUserCredentials(email: string, password: string): Promise<{status: number, message: string, error?: string, token?: string}> {


    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (email && password) {
               resolve({status: 200, message: "Success", token: "kjasg823$%&%^$&$*$^$DGCVSDVW%C^£V%$34562546136v52cyeqrtfdf45"})
           }else {
               reject({status: 404, message: "Error", error: "Invalid credentials"})
           }
       }, 1000)
    })
}

export function CheckUserCredentialsAdmin(name: string, password: string): Promise<{status: number, message: string, error?: string, token?: string}> {

    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (name && password) {
                if (name == "admin" && password == "admin") {
                    resolve({status: 200, message: "Success", token: "kjasg823$%&%^$&$*$^$DGCVSDVW%C^£V%$34562546136v52cyeqrtfdf45"})
                }
           }else {
               reject({status: 404, message: "Error", error: "Invalid credentials"})
           }
       }, 1000)
    })
}