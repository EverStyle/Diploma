import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Header";
import PersonalArea from "./screens/PersonalArea";
import FileScreen from "./screens/FileScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import PlanScreen from "./screens/PlanScreen";
import RecordBookScreen from "./screens/RecordBookScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import AdminSchedule from "./screens/AdminSchedule";
import AdminRecordBook from "./screens/AdminRecordBook";
import { useState, useEffect } from "react";
import Login from "./screens/Login/Login";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  console.log(user.roleId)
  console.log(token)
  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
    if (token) {
      localStorage.setItem('token', token || '');
    }
  }, [token]);

  return (
    <Router>

      {token ? (

        //if пользователь админ выводи админку
        // {user.roleId === 1 ? <div></div>}
        <>
          {(() => {
            switch (user.roleId) {
              case 1:
                return <div>1</div>
              case 2:
                return <div>2</div>
              case 3:
                return <div>3</div>
              case 4:
                return <div>4</div>
              default:
                return <div>5</div>
            }

            // крейзи щит крч, сначало в юзер роль выводится андефайнед на время ответа от сервера наверное, потом он принимает уже ид ответа и вроде перезаписывает а вроде и нет 
          })()}
          <main className='container'>

            <Headers
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
            <div className='content'>
              <PersonalArea />
              <div className='routers'>
                <Route path='/yvedomlenia' component={NotificationsScreen} />
                <Route path='/ras' component={ScheduleScreen} />
                <Route path='/fail' component={FileScreen} />
                <Route path='/zachetka' component={RecordBookScreen} />
                <Route path='/plan' component={PlanScreen} />
                <Route path='/admin/Shedule' component={AdminSchedule} />
                <Route path='/admin/RecordBook' component={AdminRecordBook} />
              </div>
            </div>
          </main>
          <Footer />

        </>
      ) : (
        <main className='container'>
          <Route path="/">
            <Login
              setToken={setToken}
              setUser={setUser}
            />
          </Route>
        </main>
      )}
    </Router>
  );
}


export default App;


{/* <Router>
      {token ? (
        //if пользователь админ выводи админку

        // <div>
        //   {user.roleId == 1 ? <div>1</div> : <div>2</div>}
        // </div>
        <>
          {user.roleId == 1 ?
            <>
              <main className='container'>
                <Headers
                  setToken={setToken}
                  user={user}
                  setUser={setUser}
                />
                <div className='content'>
                  <PersonalArea />
                  <div className='routers'>
                    <Route path='/yvedomlenia' component={NotificationsScreen} />
                    <Route path='/ras' component={ScheduleScreen} />
                    <Route path='/fail' component={FileScreen} />
                    <Route path='/zachetka' component={RecordBookScreen} />
                    <Route path='/plan' component={PlanScreen} />
                    <Route path='/admin/Shedule' component={AdminSchedule} />
                    <Route path='/admin/RecordBook' component={AdminRecordBook} />
                  </div>
                </div>
              </main>
              <Footer />
{/* сомнительный тернарник при последнем выкидывает в последнее утверждение до реги ОЧЕНЬ СОМНИТЕЛЬНЫЙ ТЕРАНАРНИК!!!! */}
    //         </> : user.roleId == 2 ? <>2</> : user.roleId == 3 ? <>3</> : user.roleId == 4 ? <>4</> : <div><main className='container'>
    //             <Headers
    //               setToken={setToken}
    //               user={user}
    //               setUser={setUser}
    //             />
    //             <div className='content'>
    //               <PersonalArea />
    //               <div className='routers'>
    //                 <Route path='/yvedomlenia' component={NotificationsScreen} />
    //                 <Route path='/ras' component={ScheduleScreen} />
    //                 <Route path='/fail' component={FileScreen} />
    //                 <Route path='/zachetka' component={RecordBookScreen} />
    //                 <Route path='/plan' component={PlanScreen} />
    //                 <Route path='/admin/Shedule' component={AdminSchedule} />
    //                 <Route path='/admin/RecordBook' component={AdminRecordBook} />
    //               </div>
    //             </div>
    //           </main>
    //           <Footer /></div>}
    //     </>
    //   ) : (
    //     <main className='container'>
    //       <Route path="/">
    //         <Login
    //           setToken={setToken}
    //           setUser={setUser}
    //         />
    //       </Route>
    //     </main>
    //   )
    //   }
    // </Router > */}