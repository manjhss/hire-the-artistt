import React, { useId } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const InputField = React.forwardRef(function InputField(
	{ label, type, className = "", ...props }: any,
	ref
) {
	const id = useId();

	return (
		<div className="space-y-2">
			{label && <Label htmlFor={id}>{label}</Label>}

			<Input
				className={className}
				type={type}
				ref={ref}
				id={id}
				{...props}
			/>
		</div>
	);
});

export default InputField;
