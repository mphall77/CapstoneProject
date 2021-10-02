import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Services/Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  
  function signup(email, password, uid) {
    return auth.createUserWithEmailAndPassword(email, password, uid);
  }
  function login(email, password, uid) {
    return auth.signInWithEmailAndPassword(email, password, uid);
  }



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser,
    login,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

// export const UserContext = React.createContext()

// export default (props) => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         auth.onAuthStateChanged(async(user) => {
//             if(user) {
//                 console.log(user)
//                 const {email, displayName, photoURL} = user
//                 setUser({
//                     email,
//                     displayName,
//                     photoURL
//                 })
//             } else {
//                 setUser(null)
//             }
//         })
//     }, [])
//     return (
//       <div>
//           <UserContext.Provider value={user}>
//             <div>{props.children}</div>
//           </UserContext.Provider>
//       </div>
//     )
// }
