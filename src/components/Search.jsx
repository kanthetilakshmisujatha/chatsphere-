import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Jane', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-uu44Xut__LJbQBcie_rOW4gDljUPtA0Gw&usqp=CAU" },
    { id: 2, name: 'Suji', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&usqp=CAU" },
    { id: 3, name: 'Balu', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6x9MfYNWeItVatVSX3vB7zFB60b5YE0Gxw&usqp=CAU' },
    { id: 4, name: 'Tarun', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-uu44Xut__LJbQBcie_rOW4gDljUPtA0Gw&usqp=CAU" },
    { id: 5, name: 'Ramya', avatar: "https://th.bing.com/th/id/OIP.8UqOTLl0knNXrmb8iSs8KwHaHw?rs=1&pid=ImgDetMain"  },
    { id: 6, name: 'Vara', avatar: "data:image/jpeg;base64,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" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAvatarClick = (userId) => {
    navigate(`/chats/${userId}`); // Navigate to the chat page with user ID
  };

  return (
    <div className="search">
      <div className="searchform">
        <input
          type="text"
          placeholder="Find the user"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        />
      </div>

      {/* Display filtered users */}
      {filteredUsers.map((user) => (
        <div className="userchat" key={user.id} onClick={() => handleAvatarClick(user.id)}>
          <img src={user.avatar} alt={user.name} />
          <div className="userchatinfo">
            <span>{user.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
