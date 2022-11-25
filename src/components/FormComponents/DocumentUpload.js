import react from "react";
import '../JobApplication.css'

function DocumentUpload() {
    return(
        <div className="form_container">
            <h4 className="medium_text_center"> Please upload your cover letter and resume</h4>
            <div className="upload_container">
                <div className="resume_upload">
                    <h5 className="input_header"> Resume </h5>
                    <div className="upload_box">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                </div>
                <div className="cover_letter_upload">
                    <h5 className="input_header"> Cover Letter </h5>
                    <div className="upload_box">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DocumentUpload;