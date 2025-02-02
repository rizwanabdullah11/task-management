// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Comments from './comments';
// import Activities from './activities';
// import Home from './Home';
// import Userprofile from './Assignee/Assignee';
// import NewTask from './Modal/newTask';
// import Clientprofile from './Client/Client';
// import ChatRoom from './Chat/chatRoom';

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 transition-all duration-300 overflow-hidden">
//         <div className="h-full overflow-auto">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/new-task" element={<NewTask />} />
//             <Route path="/comments" element={<Comments />} />
//             <Route path="/activities" element={<Activities />} />
//             <Route path="/users" element={<Userprofile />} />
//             <Route path="/clients" element={<Clientprofile />} />
//             <Route path="/chat/:taskId" element={<ChatRoom />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Comments from './comments';
import Activities from './activities';
import Home from './Home';
import Userprofile from './Assignee/Assignee';
import NewTask from './Modal/newTask';
import Clientprofile from './Client/Client';
import ChatRoom from './Chat/chatRoom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-8 lg:ml-4 transition-all duration-300">
        <div className="h-full p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-task" element={<NewTask />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/users" element={<Userprofile />} />
            <Route path="/clients" element={<Clientprofile />} />
            <Route path="/chat/:taskId" element={<ChatRoom />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
