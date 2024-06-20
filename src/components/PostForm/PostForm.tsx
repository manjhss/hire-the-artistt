import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import appwriteService from "../../appwrite/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "../ui/button";
import FormWrapper from "./FormWrapper";
import InputField from "./InputField";
import RTE from "../RTE";

function PostForm({ post }: any) {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		control,
		getValues,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			title: post?.title || "",
			slug: post?.$id || "",
			description: post?.description || "",
		},
	});

	const navigate = useNavigate();
	const { userData } = useSelector((state: RootState) => state.auth);

	const submit = async (data: any) => {
		console.log(data);

		if (post) {
			const file = data.image[0]
				? await appwriteService.uploadFile(data.image[0])
				: null;

			if (file) {
				appwriteService.deleteFile(post.featuredImage);
			}

			const dbPost = await appwriteService.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : undefined,
			});

			if (dbPost) {
				navigate(`/gigs/${dbPost.$id}`);
			}
		} else {
			const file = await appwriteService.uploadFile(data.image[0]);

			if (file) {
				const fileId = file.$id;
				data.featuredImage = fileId;

				const dbPost = await appwriteService.createPost({
					...data,
					userId: userData?.$id,
				});

				if (dbPost) {
					navigate(`/gigs/${dbPost.$id}`);
				}
			}
		}
	};

	const slugTransform = useCallback((value: string) => {
		if (value && typeof value === "string")
			return value
				.trim()
				.toLowerCase()
				.replace(/[^a-zA-Z\d\s]+/g, "-")
				.replace(/\s/g, "-");

		return "";
	}, []);

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "title") {
				setValue("slug", slugTransform(value.title), {
					shouldValidate: true,
				});
			}
		});

		return () => subscription.unsubscribe();
	}, [watch, slugTransform, setValue]);

	return (
		<div className="mt-4 rounded-lg">
			<FormWrapper title={post ? "Edit Gig" : "Create a Gig"}>
				<form onSubmit={handleSubmit(submit)}>
					<div className="col-span-2 space-y-4">
						<InputField
							type="text"
							label="Title"
							placeholder="e.g. I will do ..."
							{...register("title", {
								required:
									"Title should be atleast 24 character(s)",
							})}
						/>

						{errors.description && errors.description?.message}

						<InputField
							type="text"
							label="Gig Id"
							{...register("slug", {
								required: true,
							})}
							disabled={true}
						/>

						<RTE
							label="Description"
							name="description"
							control={control}
							defaultValue={getValues("description")}
						/>

						<InputField
							type="file"
							label="Featured Image"
							accept="image/png, image/jpg, image/jpeg, image/gif"
							placeholder="e.g. Blog"
							{...register("image", {
								required: !post,
							})}
						/>

						{post && (
							<div className="h-60 w-60 flex items-center justify-center">
								<img
									src={`${appwriteService.getFilePreview(
										post.featuredImage
									)}`}
									alt={post.title}
									className="rounded-lg"
								/>
							</div>
						)}

						<Button disabled={isSubmitting} type="submit">
							{post ? "Update" : "Create"}
						</Button>
					</div>
				</form>
			</FormWrapper>
		</div>
	);
}

export default PostForm;
