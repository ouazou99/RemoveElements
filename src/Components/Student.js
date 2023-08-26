export default function Students(props) {
  function one(kk) {
    return kk.fn + " yahhhh  " + kk.la;
  }
  const ele = " Hello One ";
  const user = {
    fn: "mohamed",
    la: 33
  };
  return (
    <div className="App">
      <h1 className="ko"> {props.text}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h4>
        {" "}
        hello man {ele} {one(user)}{" "}
      </h4>
      <label for="fn"> first name : </label>
      <input type="text" id="fn" placeholder="first name" />
      <br />
      <br />
      <label for="ln"> Last name : </label>
      <input type="text" id="ln" placeholder="last name" />
    </div>
  );
}
