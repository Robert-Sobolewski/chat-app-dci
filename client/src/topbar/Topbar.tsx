import './topbar.scss';
import React, { FormEvent } from 'react'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect } from 'react';




const Topbar = () => {


  const [usersFound, setUsersFound] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const searchForUsers = async (query: any) => {
    const result = await fetch('http://localhost:4444/search=${query}').then((response:any) => setUsersFound(response.json))
    return (await result.json()).results;
  }

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText')
  }


useEffect(() => {
  const query = encodeURIComponent(userSearch);
      if (query) {
        const response = searchForUsers(query);
        setUsersFound(response);
      }
}, [userSearch])





  // useEffect(() => {
  //   (async () => {
  //     const query = encodeURIComponent(userSearch);
  //     if (query) {
  //       const response = await searchForUsers(query);
  //       setUsersFound(response);
  //     }
  //   })();
  // }), [userSearch];


  return (
    <div className='topbar'>
        <div className="topLeft">
            <div className="logo">iBukun</div>
        </div>
        <div className="topCenter">
            <div className="searchbar">
              {/* <SearchOutlinedIcon /> */}
              <form  className="searchForm" onSubmit={event => search(event)}></form>
              <input type="text" id='searchText' />
              <button>Search</button>
            </div>
        </div>
        <div className="topbarRight">

        </div>
    </div>
  )
}

export default Topbar