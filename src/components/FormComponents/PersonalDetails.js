import '../JobApplication.css'

function PersonalDetails({formData, handleChange}) {

    //highlights input box labels
    const focusLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "#8b0000"
        document.querySelector("[for=" + labelId + "]").style.textDecoration = "underlined"
        document.querySelector("[for=" + labelId + "]").style.fontWeight = "550"
    }

    const blurLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "black"
        document.querySelector("[for=" + labelId + "]").style.textDecoration = ""
        document.querySelector("[for=" + labelId + "]").style.fontWeight = ""
    }
    
    return(
        <div className="form_container">
            <div className="input_container">
            
                <div className="single_input">
                    <p className="entry_header" > First Name </p>
                    <input className="info_input" 
                    name="first_name" 
                    onFocus={() => focusLabel("first_name")}
                    onBlur={() => blurLabel("first_name")}
                    id= "first_name" 
                    value={formData.first_name}
                    onChange={handleChange}
                    type="text" 
                    required></input>
                </div>
                
                <div className="single_input">
                    <p className="entry_header" > Last Name </p>
                    <input className="info_input"
                    name="last_name"
                    onFocus={() => focusLabel("last_name")}
                    onBlur={() => blurLabel("last_name")} 
                    id="last_name" 
                    value={formData.last_name}
                    onChange={handleChange}
                    type="text" 
                    required
                    ></input>
                </div>

                <div className="single_input">
                    <p className="entry_header" > Email </p>
                    <input className="info_input"
                    name="email" 
                    onFocus={() => focusLabel("email")}
                    onBlur={() => blurLabel("email")}
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    type="text" 
                    required></input>
                </div>

                <div className="single_input">
                    <p className="entry_header" > Phone Number </p>
                    <input className="info_input" 
                    name="phone_number" 
                    onFocus={() => focusLabel("phone_number")}
                    onBlur={() => blurLabel("phone_number")}
                    id="phone_number" 
                    value={formData.phone_number}
                    onChange={handleChange}
                    type="text" 
                    required
                    ></input>
                </div>

                <div className="single_input">
                    <p className="entry_header" > Address </p>
                    <input className="info_input"
                    name="address"
                    onFocus={() => focusLabel("address")}
                    onBlur={() => blurLabel("address")}
                    id="address" 
                    value={formData.address}
                    onChange={handleChange}
                    type="text" 
                    required
                    ></input>
                </div>
                
            </div>
        </div>
    );
}

export default PersonalDetails;