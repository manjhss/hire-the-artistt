import conf from "@/conf/conf";
import { Client, Account, ID, OAuthProvider } from "appwrite";

type UserAccount = {
	email: string;
	password: string;
	name?: string;
};

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.account = new Account(this.client);
	}

	async createAccount({ email, password, name }: UserAccount) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);

			if (userAccount) {
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			throw error;
		}
	}

	async createAccountWithGoogle() {
		try {
			await this.account.createOAuth2Session(
				OAuthProvider.Google,
				"http://localhost:5173",
				"http://localhost:5173/fail"
			);
		} catch (error) {
			throw error;
		}
	}

	async login({ email, password }: UserAccount) {
		try {
			return await this.account.createEmailPasswordSession(
				email,
				password
			);
		} catch (error) {
			throw error;
		}
	}

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			throw error;
		}
	}

	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			throw error;
		}
	}
}

const authService = new AuthService();

export default authService;
