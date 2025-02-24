import React from "react";

const ProfileDetailsComponent = ({ user }) => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3 className="card-title">Profile Details</h3>
                        </div>
                        <div className="card-body">
                            <div className="text-center mb-4">
                                {user.image && (
                                    <img
                                        src={user.image.url}
                                        alt="Profile"
                                        className="img-fluid rounded-circle"
                                        style={{ width: "150px", height: "150px" }}
                                    />
                                )}
                                {!user.image && (
                                    <img
                                        src="./Images/profile.png"
                                        alt="Profile"
                                        className="img-fluid rounded-circle"
                                        style={{ width: "150px", height: "150px" }}
                                    />
                                )}
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" value={user.userName} readOnly />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value={user.email} readOnly />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Block Status</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.blockStatus ? "Blocked" : "Not Blocked"}
                                        readOnly
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Joined Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={new Date(user.date).toLocaleDateString()}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailsComponent;
