import React from "react";
import About from "../Components/About";

function UserHome(props) {

    return (
        <div >     
          <br/><br/><br/><br/><br/>
          <About
            desc={`${props.name} helllooo!!!!!!`}
            btn="Button!"
          />
        </div>
      );
    }
    

export default UserHome;
