const Form = () => (
  <form
    action=""
    className="flex justify-center flex-col items-center  w-full mb-12"
  >
    <h3 className="self-start ml-80 text-2xl">Add new book</h3>
    <div>
      <input
        type="text"
        placeholder="Book Title"
        className="p-2 bg-white border-black border-solid border"
      />
      <input
        type="text"
        placeholder="Author"
        className="ml-4 p-2 border-black border-solid border"
      />
      <button className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">
        Add Book
      </button>
    </div>
  </form>
);

export default Form;
