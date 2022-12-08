import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // getting data from the server
    fetchingData();
  }, []);

  //fetching data
  const fetchingData = async () => {
    try{
      const res = await fetch(
        "https://keen-quick-airport.glitch.me/tasks"
      );
      if (!res.ok) throw new Error("Something went wrong!")
      const data = await res.json();
      setTasks(data)
    } catch(error){
      console.log(error.message)
    }
  }
  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-800 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />

      <AddTask />
      <TaskList tasks={tasks}/>
      <Footer />
    </div>
  );
};

export default App;