import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../widgets/Button";
import logo from "../assets/logo.png"
import constants from '../constants/EndPoints'
import auth from '../constants/Global';

import Alphabet from "../widgets/Alphabet";
import Heading from "../widgets/Heading";

export default function Dashboard () {
  const navigate = useNavigate();

  const [alphabetList, setalphabets] = useState();
  const fetchAlphabets = async (langs) => {
    const res = await fetch('/translate/' + langs + constants.alphabets,
      {
        headers: new Headers({
          "Authorization": `Basic ${auth.authKey}`
        })
      });
    const data = await res.json();
    setalphabets(data);
    console.log(data);
  }

  const [languages, setLanguages] = useState([]);

  const fetchSupportedLanguages = async () => {
    try {
      const res = await fetch(constants.languageSelection,
        {
            headers: new Headers({
              "Authorization": `Basic ${auth.authKey}`
            })
        }); 
      const data = await res.json();
      setLanguages(data);
    } catch (err) {
      console.log(err);
    }
    
  };

  useEffect(() => {
    fetchSupportedLanguages();
    fetchAlphabets('spanish');
  }, []);

  const logout = async () => {
    fetch(constants.logout);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="mx-auto mt-[5vh] bg-gray-200	 rounded-xl shadow-lg items-center">
      <div className="py-4 lg:px-8 pt-8 mx-4 lg:mx-0">
        <div className="flex justify-between">
          <div>
            <img
              src={logo}
              className="max-h-12 pt-8 order-last"
              alt="SpeakEZ logo"
            />
          </div>

          <div className="flex flex-1 flex-col max-w-fit">
            <select name="lang" id="lang" >
              {
                languages.map((lang, index) => {
                  return (
                    <option key={index} value={lang.countryCode}>{lang.languageName}</option>
                  );
                })
              }
            </select>

            <div className="ml-10">
              <Heading textContent="Alphabets" />
            </div>
          </div>

          <div>
            <Button type="submit" textContent="Logout" callBack={ () => {logout()} } />
          </div>
        </div>
        
        <div className="grid grid-cols-5 mt-10">
          {alphabetList &&
            alphabetList.map((alpha, index) => {
              return (
                <Alphabet key={index} alpha={alpha}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}