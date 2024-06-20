import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FormWrapper = ({ title, children }: any) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-3xl">{title}</CardTitle>
			</CardHeader>

			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default FormWrapper;
