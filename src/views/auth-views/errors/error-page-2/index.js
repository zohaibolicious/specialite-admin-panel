import React from 'react'
import { Button } from "antd";
// import { APP_NAME } from 'configs/AppConfig';
// import { Link } from 'react-router-dom'
// import Flex from 'components/shared-components/Flex'
import { connect } from 'react-redux'
import { signOut } from 'redux/actions/Auth';

const ErrorTwo = ({signOut}) => {
	//const theme = useSelector(state => state.theme.currentTheme)
	return (
		<div style={{backgroundColor:"#fff"}}>
			<div className="container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1">
				{/* <div>
					<img className="img-fluid" src={`/img/${theme === 'light' ? 'logo.png': 'logo-white.png'}`} alt="" />
				</div> */}
				<div className="container">
					<div className="text-center mb-5">
						<img className="img-fluid" src="/img/others/BannerforSpecialité.PNG" alt="" />
						<h2 className="font-weight-bold mb-4" style={{marginTop: "70px"}}>Hey! Thank you for checking out Specialite!</h2>
						<h2 className="font-weight-bold mb-4" style={{marginTop: "70px"}}>We are working hard to bring this great service to you!</h2>
						<Button type="primary" onClick={e=>signOut()}>Sign Out</Button>
					</div>
				</div>
				{/* <Flex mobileFlex={false} justifyContent="between">
					<span>Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-weight-semibold">{`${APP_NAME}`}</span></span>
					<div>
						<a className="text-gray" href="/#" onClick={e => e.preventDefault()}>Term & Conditions</a>
						<span className="mx-2 text-muted"> | </span>
						<a className="text-gray" href="/#" onClick={e => e.preventDefault()}>Privacy & Policy</a>
					</div>
				</Flex> */}
			</div>
		</div>
	)
}

export default connect(null, {signOut})(ErrorTwo)

