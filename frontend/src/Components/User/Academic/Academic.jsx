import React, { useState, useEffect } from "react";
import { fetchAcademicDetails } from "../../../Services/userApi";
import YouTube from "react-youtube";
function Academic() {
    const [AcademicDetails, setAcademicDetails] = useState([]);
    const [selectedAcademic, setSelectedAcademic] = useState(null);

    const fetchAcademicClass = async () => {
        try {
            const { data } = await fetchAcademicDetails();
            console.log(data, "***!!");
            if (data.status) {
                console.log(AcademicDetails, "****");
                setAcademicDetails(data.data);
            }
        } catch (error) {
            console.error("Error fetching training details:", error);
        }
    };

    useEffect(() => {
        fetchAcademicClass();
    }, []);

    const selectTraining = (videoKey) => {
        setSelectedAcademic(videoKey);
    };

    return (
        <div className="mainDivOfTraining">
            <h4 className="trainingHeading">Academic Class</h4>
            {AcademicDetails.length > 0 ? (
                AcademicDetails.map((value) => (
                    <div
                        className="mainDetailsDiv"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        key={value._id}
                        onClick={() => selectTraining(value.videoLink)}
                    >
                        <h5> Name : {value.videoName}</h5>
                        <p> Description : {value.videoDescription}</p>
                        <p>Click this container to view</p>
                        <p>Posted on :{new Date(value.date).toLocaleDateString("en-GB")}</p>
                    </div>
                ))
            ) : (
                <p>No training details available</p>
            )}

            {/* modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Academic Video
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <iframe
                                width="100%"
                                height="360"
                                src={selectedAcademic}
                                title="Training class"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Academic;
