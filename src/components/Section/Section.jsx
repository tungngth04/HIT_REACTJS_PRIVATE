import '../Section/section.css';    
const Section = () =>{
    return(
        <div className="section">
            <div className="content">
                <div className="text">
                    <div className="box_text">
                        <h2 className='p2'><span>Save your time to using SoftLand</span></h2>
                    </div>
                </div>
                <div className="icon_infor">
                    <div className="sub_infor">
                        <div className="box_sub_infor">
                            <div className="icon">
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <h3>Explore Your Team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                        </div>
                    </div>
                    <div className="sub_infor">
                        <div className="box_sub_infor">
                            <div className="icon">
                                <i className="fa-regular fa-sun"></i>
                            </div>
                            <h3>Digital Whiteboard</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                        </div>
                    </div>
                    <div className="sub_infor">
                        <div className="box_sub_infor">
                            <div className="icon">
                                <i className="fa-solid fa-chart-simple"></i>
                            </div>
                            <h3>Design To Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Section;