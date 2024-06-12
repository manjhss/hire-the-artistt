import { ReactNode } from "react";
import { Card } from "./ui/card";

type Service = {
	icon: ReactNode;
	name: string;
};

function ServiceCard({ icon, name }: Service) {
	return (
		<Card className="hover:bg-muted transition-all duration-200 ease-linear">
			<div className="p-4 aspect-square flex gap-4 flex-col justify-center items-center">
				<div>{icon}</div>
				<div className="font-medium text-center hidden md:block">{name}</div>
			</div>
		</Card>
	);
}

export default ServiceCard;
