
import React from "react";

import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { BrowserRouter as Router, Switch,
	Route, Link,Routes } from "react-router-dom";
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-student"}
				className="nav-link">
				Student List PROJECT
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>

				<Route exact path="/"
					component={CreateStudent} />
				<Route path="/create-student"
					component={CreateStudent} element={<CreateStudent/>} />
				<Route path="/edit-student/:id"
					component={EditStudent} element={<EditStudent/>} />
				<Route path="/student-list"
					component={StudentList} element={<StudentList/>} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
