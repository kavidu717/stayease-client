 import { Outlet } from "react-router-dom";
 import Header from "../Components/Header";
export default function MainLayout() {
    return (
        <>
         <Header />
         <main className="py-22"> 
          <Outlet />
         </main>
        
         
        </>
           
    );
}