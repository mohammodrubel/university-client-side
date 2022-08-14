import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import CreateSlider from './components/Dashbord/CreateSlider/CreateSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CreateCourse from './components/Dashbord/CreateCourse/CreateCourse';
import CreateEvents from './components/Dashbord/CreateEvents/CreateEvents';
import CreateBlog from './components/Dashbord/CreateBlog/CreateBlog';
import CreateTeacher from './components/Dashbord/CreateTeacher/CreateTeacher';
import AllCourse from './components/AllCourse/AllCourse';
import AllEvent from './components/AllEvent/AllEvent';
import ContactInfo from './components/ContactInfo/ContactInfo';
import AllBlog from './components/AllBlog/AllBlog';
import AllBlogInformation from './components/AllBlog/AllBlogInformation';
import AllCourseInformation from './components/AllCourse/AllCourseInformation';
import AllEventInformation from './components/AllEvent/AllEventInformation';
import Login from './components/Authintication/Login/Login';
import Registration from './components/Authintication/Registration/Registration';
import ResetPassword from './components/Authintication/ResetPassword/ResetPassword';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import ProtectedRoute from './components/Authintication/ProtectedRoute/ProtectedRoute';
import MakeAdmin from './components/Dashbord/MakeAdmin/MakeAdmin';
import Admin from './components/Authintication/Admin/Admin';
import Dashbord from './components/Dashbord/Dashbord';
import DeleteSlider from './components/Dashbord/DeleteSlider/DeleteSlider';
import DeleteCourse from './components/Dashbord/DeleteCourse/DeleteCourse';
import DeleteEvent from './components/Dashbord/DeleteEvent/DeleteEvent';
import DeleteBlog from './components/Dashbord/DeleteBlog/DeleteBlog';
import Message from './components/Dashbord/Message/Message';
import DeleteOwner from './components/Dashbord/DeleteOwner/DeleteOwner';
import EventManagement from './components/Dashbord/EventManagement/EventManagement';
import CourseInformation from './components/Dashbord/CourseInformation/CourseInformation';
import WebUser from './components/Dashbord/WebUser/WebUser';
import NotFound from './components/NotFound/NotFound';

function App() {
  

  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Home/>}></Route>
                <Route path="/allcourse"element={<AllCourse/>}></Route>
                <Route path="/event"element={<AllEvent/>}></Route>
                <Route path="/blog"element={<AllBlog/>}></Route>
                <Route path="/customInfo"element={<ContactInfo/>}></Route>
                <Route path="/blog/:information"element={<ProtectedRoute><AllBlogInformation/></ProtectedRoute>}></Route>
                <Route path="/allcourse/:information"element={<ProtectedRoute><AllCourseInformation/></ProtectedRoute>}></Route>
                <Route path="/event/:information"element={<ProtectedRoute><AllEventInformation/></ProtectedRoute>}></Route>
                <Route path="/login"element={<Login/>}></Route>
                <Route path="/registration"element={<Registration/>}></Route>
                <Route path="/reset"element={<ResetPassword/>}></Route>


                {/* Dashbord  */}
                <Route path='/dashbord' element={<Admin><Dashbord/></Admin>}>
                  <Route path="/dashbord/createslider"element={<CreateSlider/>}></Route>
                  <Route path="/dashbord/createcourse"element={<CreateCourse/>}></Route>
                  <Route path="/dashbord/createevent"element={<CreateEvents/>}></Route>
                  <Route path="/dashbord/createblog"element={<CreateBlog/>}></Route>
                  <Route path="/dashbord/createtecher"element={<CreateTeacher/>}></Route>
                  <Route path="/dashbord/createadmin"element={<MakeAdmin/>}></Route>
                  <Route path="/dashbord/deleteslider"element={<DeleteSlider/>}></Route>
                  <Route path="/dashbord/deletecourse"element={<DeleteCourse/>}></Route>
                  <Route path="/dashbord/deleteevent"element={<DeleteEvent/>}></Route>
                  <Route path="/dashbord/deleteblog"element={<DeleteBlog/>}></Route>
                  <Route path="/dashbord/owner"element={<DeleteOwner/>}></Route>
                  <Route path="/dashbord/message"element={<Message/>}></Route>
                  <Route path="/dashbord/eventmanagement"element={<EventManagement/>}></Route>
                  <Route path="/dashbord/courseinformation"element={<CourseInformation/>}></Route>
                  <Route path="/dashbord/webuser"element={<WebUser/>}></Route>
                </Route>

                <Route path="/*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
