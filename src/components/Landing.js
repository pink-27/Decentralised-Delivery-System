import obj from "../img/Pasted Graphic 3.png";
function Landing() {
  return (
    <>
      <div className="flex bg-purple-100">
        <div className=" py-40">
          <h1 className="text-6xl pl-5 hover:shadow-black">Decentralized Food Delivery App</h1>
          <p className="pt-3 pl-5 w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
          <img src={obj} className="h-1/3 mt-5 py-36 pl-10 mr-20" alt="hi"></img>
      </div>
    </>
  );
}
export default Landing;
