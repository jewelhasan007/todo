import Marquee from "react-fast-marquee";


const Updates = () => {
    const updates = [
    <p className="m-3">NPBS-1</p>,
    <p className="m-3">Substaion</p>,
    <p className="m-3">Adex</p>,
    <p className="m-3">MCC1</p>,
    <p className="m-3">MCC2</p>,
    <p className="m-3">MCC3</p>,
    <p className="m-3">E-Crane</p>,
    <p className="m-3">FlyAsh Unloader</p>,
    <p className="m-3">FoundationWorks</p>,
    ]

    return (
      <div className="flex m-5">
        <h3 className="bg-red-300 p-3">UPDATES</h3>
        <Marquee pauseOnHover speed={30}> {updates} </Marquee>
      </div>
    );
};

export default Updates;