import profilePhoto from '../assets/tatiana.jpg'

function Header() {

    return (
        <div className="header" style={{ height: "15em" }}>
            <div className="row h-100">
                <div className="col-8 d-flex align-items-center justify-content-center">
                    <h1 className="display-1" id="title">
                        Hi, I &apos;m Tatiana!
                    </h1>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <img
                        src={profilePhoto}
                        style={{
                            width: "10em",
                            height: "10em",
                            objectFit: "cover",
                            borderRadius: "50%",
                            objectPosition: "top"
                        }}
                    />
                </div>
            </div>
        </div>

    )
}

export default Header