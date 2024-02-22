import Form from "./Form";
import Listing from "./Listing";

function App() {
  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-5 mt-5'>
      <Listing/>
      <Form/>
    </div>
  );
}

export default App;
