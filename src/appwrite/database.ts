import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

type Post = {
	title: string;
	slug: string;
	description: string;
	featuredImage: string;
	userId: string;
};

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	// database service

	async createPost({ title, slug, description, featuredImage, userId }: Post) {
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{ title, description, featuredImage, userId }
			);
		} catch (error) {
			throw error;
		}
	}

	async updatePost(slug: string, { title, description, featuredImage }: Post) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{ title, description, featuredImage }
			);
		} catch (error) {
			throw error;
		}
	}

	async deletePost(slug: string) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);

			return true;
		} catch (error) {
			throw error;
		}
	}

	async getPost(slug: string) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
		} catch (error) {
			throw error;
		}
	}

	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				queries
			);
		} catch (error) {
			throw error;
		}
	}

	// storage service

	async uploadFile(file: any) {
		try {
			return await this.bucket.createFile(
				conf.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			throw error;
		}
	}

	async deleteFile(fileId: any) {
		try {
			await this.bucket.deleteFile(conf.appwriteBucketId, fileId);

			return true;
		} catch (error) {
			throw error;
		}
	}

	getFilePreview(fileId: any) {
		return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
	}
}

const service = new Service();

export default service;
