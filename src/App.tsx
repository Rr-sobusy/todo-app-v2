import Container from "./layout/Container";
import Typography from "./components/Typography";
import TodoContainer from "./components/TodoContainer";
import AddBtn from "./components/AddBtn";
function App() {
  return (
    <Container>
      <div className="-mt-[9rem] flex flex-col mx-5 md:mx-auto md:max-w-[500px]">
        <div className="flex items-center justify-between">
          <Typography className="tracking-wider text-white">TODO</Typography>
          <div className="toggle">rex</div>
        </div>
        <div className="flex flex-col gap-4 mt-[1.75rem]">
         <AddBtn>CReate New Todo ...</AddBtn>
        </div>
      </div>
    </Container>
  );
}

export default App;
