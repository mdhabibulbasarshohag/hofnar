

const ChangePassword = () => {
    return (
        <>
            <div className="sl-dashboard-item">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="change-password-input-box">
                            <div className="input-single-item">
                                <label htmlFor="">Old Password</label>
                                <input
                                    type="text"
                                    placeholder="Write your old password"
                                />
                            </div>
                        </div>
                        <div className="change-password-input-box">
                            <div className="input-single-item">
                                <label htmlFor="">New Password</label>
                                <input
                                    type="text"
                                    placeholder="Write your new password"
                                />
                            </div>
                        </div>
                        <div className="change-password-input-box">
                            <div className="input-single-item">
                                <label htmlFor="">Confirm Password</label>
                                <input
                                    type="text"
                                    placeholder="Write your confirm password"
                                />
                            </div>
                        </div>
                        <div className="change-password-input-box">
                            <button className="change-btn">Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;