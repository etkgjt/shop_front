import { MDBContainer } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'reactstrap';
const CustomRadioButton = ({ items, checkedFunc = () => {} }) => {
	const [radio, setRadio] = useState(1);
	useEffect(() => {
		checkedFunc ?? checkedFunc(radio);
	}, [radio]);
	return (
		<MDBContainer className="m-0 pl-0 pt-3 d-flex flex-column justify-content-around">
			{items && items.length ? (
				items.map((v, i) => (
					<Row className="ml-1 pl-3 mt-1">
						<Button
							className="custom-radio-button"
							style={{
								backgroundColor:
									radio === v?.value ? '#0085f4' : 'white',
								borderWidth: radio === v?.value ? 0 : 1,
								outline: 'none',
								marginRight: 10,
							}}
							onClick={() => setRadio(v?.value)}
						/>
						<p style={{ fontSize: 14 }}>{v.label}</p>
					</Row>
				))
			) : (
				<div></div>
			)}
		</MDBContainer>
	);
};
export default CustomRadioButton;
