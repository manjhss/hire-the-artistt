import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
	return (
		<div className="lg:w-[70%] xl:w-[1066px] h-full mx-auto pb-12">
			{children}
		</div>
	);
}

export default Container;
