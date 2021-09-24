import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './fire';
import Login from './login';
import Hero from './assets/Hero';
import Sidebar from './assets/Sidebar';
import MainContent from './assets/MainContent';
function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [animeList, SetAnimeList]=useState([]);
  const [topAnime, SetTopAnime]=useState([]);
  const [search, SetSearch]=useState("");
  const [mainList, SetMainList]=useState([]);
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-disabled":
          case "user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });

  }
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else setUser("");
    })

  };

  useEffect(() => {
    authListener();
    	GetTopAnime();
  }, [])

  const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 20));
    SetMainList(temp.top.slice(4, 100))
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());
		SetAnimeList(temp.results);
	}

	// useEffect(() => {
	// 	GetTopAnime();
	// }, []);

  return (
    <>
      <div className="App">
        {user ? (
          <>
             <Hero handleLogout={handleLogout}
                	HandleSearch={HandleSearch}
				      	search={search}
					      SetSearch={SetSearch}
					      animeList={animeList} />

			        <div className="content-wrap">
			        	<Sidebar 
				      	topAnime={topAnime} />
				       <MainContent
					      animeList={animeList}
                mainList={mainList} />
		     	</div>
           <span id="top1">&copy;Anugna Gunturu</span>
         </>
        ):(
          <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={ handleLogin}
          handleSignup={ handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
        )}
       
       
      </div>
    </>
  )
}

export default App;

