import Form from "./Form";
import Listing from "./Listing";

function App() {
  return (
    <div className='max-w-[1200px] mx-auto md:grid grid-cols-5 mt-5'>
      <Form/>
      <Listing/>
    </div>
  );
}

export default App;
