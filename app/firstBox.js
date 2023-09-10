const FirstBox=({ openSecondBox })=>{
    const handleOpen=()=>{
        openSecondBox();
    };
    return (
        <div className="alertBox" onClick={handleOpen}>
          <button className="alert">Alert</button>
        </div>
    );
};
export default FirstBox;
