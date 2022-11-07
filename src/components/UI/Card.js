const Card = (props) => (
  <div className="center_helper w-11/12 p-1 flex justify-center align-center h-[40rem] overflow-y-auto">
    {props.children}
  </div>
);
export default Card;
