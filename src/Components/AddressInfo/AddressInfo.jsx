import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from './../Button';

import './AddressInfo.scss';

const validationSchema = Yup.object().shape({
	company: Yup.string().required('*Company name is Required'),
	country: Yup.string().required('*Select any Country'),
	street: Yup.string().required('*Required'),
	cityCode: Yup.string().required('*City Code is Required'),
	city: Yup.string().required('*Required')
});

const AddressInfo = () => {
	return (
		<div id='address-info'>
			<h2 className='choose-amount'>Address</h2>
			<Formik
				initialValues={{ company: '', country: '', street: '', cityCode: '', city: '' }}
				validationSchema={validationSchema}>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<Form.Group controlId='formGridEmail'>
						<Row noGutters className='mt-2'>
							<Col md={5}>
								<Form.Label>Company (optional)</Form.Label>
								<Form.Control
									type='text'
									name='company'
									placeholder='Mustermann GmbH'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.company}
									className={touched.company && errors.company ? 'error' : null}
								/>
								{touched.company && errors.company ? (
									<div className='error-message'>{errors.company}</div>
								) : null}
							</Col>
							<Col md={{ span: 5, offset: 1 }}>
								<Form.Label>Country</Form.Label>
								<Form.Control
									name='country'
									as='select'
									defaultValue='Choose...'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.country}
									className={touched.country && errors.country ? 'error' : null}>
									<option>Germany</option>
									<option>Pakistan</option>
									<option>England</option>
								</Form.Control>
								{touched.country && errors.country ? (
									<div className='error-message'>{errors.country}</div>
								) : null}
							</Col>
						</Row>
						<Row noGutters className='mt-3'>
							<Col md={11}>
								<Form.Label>Street and house number</Form.Label>
								<Form.Control
									name='street'
									type='text'
									placeholder='Buchweg 3'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.street}
									className={touched.street && errors.street ? 'error' : null}
								/>
								{touched.street && errors.street ? (
									<div className='error-message'>{errors.street}</div>
								) : null}
							</Col>
						</Row>
						<Row noGutters className='mt-3'>
							<Col md={5}>
								<Form.Label>City code</Form.Label>
								<Form.Control
									name='cityCode'
									type='number'
									placeholder='0000'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.cityCode}
									className={touched.cityCode && errors.cityCode ? 'error' : null}
								/>
								{touched.cityCode && errors.cityCode ? (
									<div className='error-message'>{errors.cityCode}</div>
								) : null}
							</Col>
							<Col md={{ span: 5, offset: 1 }}>
								<Form.Label>City</Form.Label>
								<Form.Control
									name='city'
									type='text'
									placeholder='Freiburg'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.city}
									className={touched.city && errors.city ? 'error' : null}
								/>
								{touched.city && errors.city ? (
									<div className='error-message'>{errors.city}</div>
								) : null}
							</Col>
						</Row>
						<Button text={'Next'} to='/form_c1_payment' />
					</Form.Group>
				)}
			</Formik>
		</div>
	);
};

export default AddressInfo;
