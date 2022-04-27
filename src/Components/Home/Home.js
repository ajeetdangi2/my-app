import { BrowserRouter , Link } from "react-router-dom";
import React , { useEffect , useState}  from 'react';
import './Navbar.css';
import axios from 'axios';
function Navbar (){
    const [data , setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const resp = await axios.get('https://isro.vercel.app/api/launchers');
            setData(resp.data.launchers);
            console.log(resp);
          } catch (err) {
            // eslint-disable-next-line no-console
            console.log('oops something went wrong');
          }
        }
        fetchData();
      }, [])
    return(
        <div>
            Sweet Home
            {
                data.map((val) => (
                   <span> {val.id}</span>
                  ))
            }
        </div>

    );
}
export default Navbar;