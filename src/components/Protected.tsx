import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";

function Protected({
	children,
	authentication = true,
}: {
	children: ReactNode;
	authentication?: boolean;
}) {
	const navigate = useNavigate();

	const [loader, setLoader] = useState(true);
	const { status } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (authentication && status !== authentication) {
			navigate("/login");
		} else if (!authentication && status !== authentication) {
			navigate("/explore");
		}

		setLoader(false);
	}, [status, navigate, authentication]);

	return loader ? (
		<div className="h-screen flex justify-center items-center">
			<h1>Loading...</h1>
		</div>
	) : (
		<>{children}</>
	);
}

export default Protected;
