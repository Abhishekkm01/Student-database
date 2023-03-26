import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	department: Yup.string().required("Required"),
	mobile: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),
	Address: Yup.string().required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			
			name<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			email<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<FormGroup>
			department<Field name="department" type="String"
				className="form-control" />
			<ErrorMessage
			name="department"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
			Mobile<Field name="mobile" type="number"
				className="form-control" />
			<ErrorMessage
			name="mobile"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
			Address<Field name="Address" type="String"
				className="form-control" />
			<ErrorMessage
			name="Address"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>


		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
