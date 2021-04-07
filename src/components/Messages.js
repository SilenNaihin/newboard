import React, {useState} from "react";
import checkmark from '../images/checkmark.svg'
import Announcement from './Announcement'

function Messages(props) {
  const [addAnnouncement,setAddAnnouncement] = useState(true)
  const [newAnnouncement, setNewAnnouncement] = useState("")
  const [announcements, setAnnouncements] = useState([])
  const [buttonElement, setButtonElement]= useState('')

  function announcementEnter(event) {
    if (event.key === "Enter") {
      announcementSend()
    }
  }
  
  function announcementSend () {
    if (announcements.includes(newAnnouncement)) {
      setButtonElement("Choice Already Exists!");
    } else if (newAnnouncement === "") {
      setButtonElement("Enter Something");
    } else {
      setAnnouncements([...announcements, newAnnouncement]);
      setButtonElement('');
    }  
  }

  function addCard () {
    setAddAnnouncement(false)
  };

  function removeChoice(announcement) {
    setAnnouncements(announcements.filter((c) => c !== announcement));
  }
  
  return (
    <div className="bg-white h-full flex flex-col">
      <div className="mx-auto text-xl font-medium mt-4">Announcements</div>
      <div className="ml-4">
        <div className="mt-2">
          {announcements.map((announcement) => (
            <Announcement
              key={announcement}
              announcement={announcement}
              removeChoice={removeChoice}
            />
          ))}
        </div>
        <div className="mt-2 mr-auto">
          {addAnnouncement ? (
            <button onClick={addCard}>
              Add <b className="text-green-400 shadow px-1 h-auto">+</b>
            </button>
          ) : (
            <>
              <div className="flex">
                <input
                  className="border-b border-gray w-3/5"
                  onKeyPress={announcementEnter}
                  placeholder="Type here..."
                  value={newAnnouncement}
                  onChange={(e) => setNewAnnouncement(e.target.value)}
                />
                <button className="ml-2" onClick={announcementSend}>
                  <img alt="checkmark" src={checkmark} className="h-6 w-6" />
                </button>
              </div>
              <div className="text-sm text-red-300">{buttonElement}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;