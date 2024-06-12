import { ReactNode } from "react";

function Title({ children }: { children: ReactNode }) {
	return <div className="text-3xl font-semibold">{children}</div>;
}

export default Title;
