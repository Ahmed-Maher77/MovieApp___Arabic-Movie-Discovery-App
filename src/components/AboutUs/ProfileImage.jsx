import DeveloperImg from "../../assets/My_Picture.jpg";

const ProfileImage = () => {
    return (
        <div className="about-image">
            <img src={DeveloperImg} alt="About Us" className="img-fluid" />
        </div>
    );
};

export default ProfileImage; 