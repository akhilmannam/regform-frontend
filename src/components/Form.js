import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

function Form() {
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [jobType, setJobType] = useState("Full Time");
	const [dob, setDOB] = useState("");
	const [location, setLocation] = useState("Chennai");
	const [users, setUsers] = useState([]);
	const [editForm, setEditForm] = useState(false);
	const [editID, setEditID] = useState("");

	useEffect(() => {
		async function getData() {
			let response = await axios.get("https://regform-backend.herokuapp.com/users");
			setUsers(response.data);
		}
		getData();
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		const data = { name, mobile, email, jobType, dob, location };
		async function postRegData() {
			await axios.post("https://regform-backend.herokuapp.com/user", data);
		}
		postRegData();
		window.location.replace("/");
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		const data = { name, mobile, email, jobType, dob, location };
		async function putRegData() {
			await axios.put(`https://regform-backend.herokuapp.com/user/${editID}`, data);
		}
		putRegData();
		window.location.replace("/");
	};

	return (
		<>
			{!editForm ? (
				<form
					onSubmit={handleAdd}
					className="my-3 p-2 border border-dark"
				>
					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="name">
								Full Name
							</label>
							<input
								required
								class="form-control"
								onChange={(e) => setName(e.target.value)}
								value={name}
								type="text"
								id="name"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="mobile">
								Mobile
							</label>
							<input
								required
								class="form-control"
								onChange={(e) => setMobile(e.target.value)}
								value={mobile}
								type="text"
								id="mobile"
								minLength="10"
								maxLength="10"
							/>
						</div>
						<div className="col-6">
							<label className="mx-2" htmlFor="email">
								Email
							</label>
							<input
								required
								class="form-control"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								type="email"
								id="email"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="jobtype">
								Job Type
							</label>
							<select
								className="form-control"
								id="jobtype"
								value={jobType}
								onChange={(e) => setJobType(e.target.value)}
							>
								<option value="Full Time">Full Time</option>
								<option value="Part time">Part time</option>
								<option value="Consultant">Consultant</option>
							</select>
						</div>
						<div className="col-6">
							<label className="mx-2" htmlFor="dob">
								Date of Birth
							</label>
							<br />
							<input
								required
								onChange={(e) => setDOB(e.target.value)}
								value={dob}
								type="date"
								id="dob"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="location">
								Preferred Location
							</label>
							<select
								className="form-control"
								id="location"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							>
								<option value="Chennai">Chennai</option>
								<option value="Bangalore">Bangalore</option>
								<option value="Hyderabad">Hyderabad</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="offset-9 col-3">
							<Button
								variant="contained"
								color="primary"
								type="submit"
							>
								Add
							</Button>
						</div>
					</div>
				</form>
			) : (
				<form
					onSubmit={handleUpdate}
					className="my-3 p-2 border border-dark"
				>
					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="name">
								Full Name
							</label>
							<input
								required
								class="form-control"
								onChange={(e) => setName(e.target.value)}
								value={name}
								type="text"
								id="name"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="mobile">
								Mobile
							</label>
							<input
								required
								class="form-control"
								onChange={(e) => setMobile(e.target.value)}
								value={mobile}
								type="text"
								id="mobile"
								minLength="10"
								maxLength="10"
							/>
						</div>
						<div className="col-6">
							<label className="mx-2" htmlFor="email">
								Email
							</label>
							<input
								required
								class="form-control"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								type="email"
								id="email"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="jobtype">
								Job Type
							</label>
							<select
								className="form-control"
								id="jobtype"
								value={jobType}
								onChange={(e) => setJobType(e.target.value)}
							>
								<option value="Full Time">Full Time</option>
								<option value="Part time">Part time</option>
								<option value="Consultant">Consultant</option>
							</select>
						</div>
						<div className="col-6">
							<label className="mx-2" htmlFor="dob">
								Date of Birth
							</label>
							<br />
							<input
								required
								onChange={(e) => setDOB(e.target.value)}
								value={dob}
								type="date"
								id="dob"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-6">
							<label className="mx-2" htmlFor="location">
								Preferred Location
							</label>
							<select
								className="form-control"
								id="location"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							>
								<option value="Chennai">Chennai</option>
								<option value="Bangalore">Bangalore</option>
								<option value="Hyderabad">Hyderabad</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="offset-9 col-3">
							<Button
								variant="contained"
								color="primary"
								type="submit"
							>
								Update
							</Button>
						</div>
					</div>
				</form>
			)}

			<div className="row">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Mobile</th>
							<th scope="col">DOB</th>
							<th scope="col">Job Type</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user, index) => (
								<tr key={index}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.mobile}</td>
									<td>{user.dob}</td>
									<td>{user.jobType}</td>
									<td>
										<Button
											variant="contained"
											color="primary"
											onClick={() => {
												setEditForm(true);
												async function getUserData() {
													let response =
														await axios.get(
															`https://regform-backend.herokuapp.com/user/${user.email}`
														);
													setEditID(
														response.data._id
													);
													setName(response.data.name);
													setMobile(
														response.data.mobile
													);
													setEmail(
														response.data.email
													);
													setJobType(
														response.data.jobType
													);
													setDOB(response.data.dob);
													setLocation(
														response.data.location
													);
												}
												getUserData();
											}}
										>
											Edit
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={() => {
												async function deleteUserData() {
													await axios.delete(
														`https://regform-backend.herokuapp.com/user/${user.email}`
													);
												}
												deleteUserData();
												window.location.replace("/");
											}}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Form;
