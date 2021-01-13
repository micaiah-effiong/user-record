import "./profileCard.css";

export default function ProfileCard({ infor }) {
  const {
    FirstName,
    LastName,
    Gender,
    Latitude,
    Longitude,
    CreditCardNumber,
    CreditCardType,
    Email,
    DomainName,
    PhoneNumber,
    MacAddress,
    URL,
    UserName,
    LastLogin,
    PaymentMethod,
  } = infor;

  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="twPc-div">
              <span className="twPc-bg twPc-block a"></span>

              <div>
                <div className="twPc-button">
                  <span
                    className="twitter-follow-button white"
                    data-show-count="false"
                    data-size="large"
                    data-show-screen-name="false"
                    data-dnt="true"
                  >
                    {UserName}
                  </span>
                </div>

                <span title="name" className="twPc-avatarLink">
                  <div className="twPc-avatarImg">
                    <div>
                      {FirstName[0].toUpperCase()}
                      {LastName[0].toUpperCase()}
                    </div>
                  </div>
                </span>

                <div className="twPc-divUser mt-3">
                  <div className="twPc-divName">
                    <span className="a page-blue">{`${FirstName} ${LastName}`}</span>
                  </div>
                  <span>
                    <span className="a page-black">
                      <span style={{ fontSize: "10px" }}>
                        Website: {` ${URL}`}
                      </span>
                    </span>
                  </span>
                </div>

                <div className="twPc-divStats">
                  <ul className="twPc-Arrange">
                    <li className="twPc-ArrangeSizeFit">
                      <span className="a page-black" title="9.840 Tweet">
                        <span className="twPc-StatLabel twPc-block">
                          Gender
                        </span>
                        <span className="twPc-StatValue">{Gender}</span>
                      </span>
                    </li>
                    <li className="twPc-ArrangeSizeFit">
                      <span className="a page-black" title="885 Following">
                        <span className="twPc-StatLabel twPc-block">
                          Phone Number
                        </span>
                        <span className="twPc-StatValue">{PhoneNumber}</span>
                      </span>
                    </li>
                    <li className="twPc-ArrangeSizeFit">
                      <span className="a page-black" title="1.810 Followers">
                        <span className="twPc-StatLabel twPc-block">Email</span>
                        <span className="twPc-StatValue">{Email}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card-back">
            <div className="twPc-div p-2">
              <div className="twPc-divStats">
                <ul className="twPc-Arrange">
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="9.840 Tweet">
                      <span className="twPc-StatLabel twPc-block">
                        Card Type
                      </span>
                      <span className="twPc-StatValue">{CreditCardType}</span>
                    </span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="885 Following">
                      <span className="twPc-StatLabel twPc-block">
                        Credit Card Number
                      </span>
                      <span className="twPc-StatValue">{CreditCardNumber}</span>
                    </span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="9.840 Tweet">
                      <span className="twPc-StatLabel twPc-block">
                        Payment Method
                      </span>
                      <span className="twPc-StatValue">{PaymentMethod}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="twPc-divStats">
                <ul className="twPc-Arrange">
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="9.840 Tweet">
                      <span className="twPc-StatLabel twPc-block">
                        Longitude
                      </span>
                      <span className="twPc-StatValue">{Longitude}</span>
                    </span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="1.810 Followers">
                      <span className="twPc-StatLabel twPc-block">
                        Latitude
                      </span>
                      <span className="twPc-StatValue"> {Latitude}</span>
                    </span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="885 Following">
                      <span className="twPc-StatLabel twPc-block">
                        Telephone
                      </span>
                      <span className="twPc-StatValue">{PhoneNumber}</span>
                    </span>
                  </li>{" "}
                </ul>
              </div>

              <div className="twPc-divStats">
                <ul className="twPc-Arrange">
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="9.840 Tweet">
                      <span className="twPc-StatLabel twPc-block">
                        Mac Address
                      </span>
                      <span className="twPc-StatValue">{MacAddress}</span>
                    </span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="1.810 Followers">
                      <span className="twPc-StatLabel twPc-block">
                        Last Login
                      </span>
                      <span className="twPc-StatValue">
                        {new Date(LastLogin).toUTCString()}
                      </span>
                    </span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <span className="a page-blue" title="885 Following">
                      <span className="twPc-StatLabel twPc-block">
                        Domain Name
                      </span>
                      <span className="twPc-StatValue">{DomainName}</span>
                    </span>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
