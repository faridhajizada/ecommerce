import { CheckUserCredentials, CheckUserCredentialsAdmin } from "../server/Authentication";

export async function Authentication({ request }: any) {
    try {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const res = await CheckUserCredentials(email, password);
        const { status, message, token, error } = res;

        if (status === 200 && token) {
            localStorage.setItem("token", token);
            return {
                status,
                message,
                user: email
            };
        } else {
            return {
                status,
                message
            };
        }
    } catch (err) {
        return {
            status: 404,
            message: "Error",
            error: "Invalid credentials"
        }
    }
}

export async function AuthenticationAdmin({ request }: any) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const password = formData.get('password') as string;

        const res = await CheckUserCredentialsAdmin(name, password);
        const { status, message, token, error } = res;

        if (status === 200 && token) {
            localStorage.setItem("admin", token);
            return {
                status,
                message,
                user: name
            };
        } else {
            return {
                status,
                message
            };
        }
    } catch (err) {
        return {
            status: 404,
            message: "Error",
            error: "Invalid credentials"
        }
    }
}
