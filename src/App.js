import "./App.css";
import { products } from "./dummydata.js";
import Card from "./components/Card.jsx";
import { useState } from "react";

function App() {

  const [data, setData] = useState(products || []);
  const [yearselected, setYearselected] = useState("");
  const [monthselected, setMonthselected] = useState("");


  // HANDLE YEAR
  const handleyear = (value) => {
    if (value === "allyears") {
      if(monthselected){
        let fdata= products.filter(item=>{
          return item.month == monthselected
        })
        setData(fdata)
      }else{
        setData(products)
      }
      setYearselected("")
    }else{

        if(monthselected){
          let fdata=products.filter(item=>{
            return item.year == value && item.month == monthselected
          })
          setData(fdata);
        }else{
          let fdata=products.filter(item=>{
            return item.year == value
          })
          setData(fdata);
        }
        setYearselected(value)

    }
  };


  // HANDLE MONTH
  const handlemonth = (value) => {
    if (value === "allmonths") {
      if(yearselected){
        let fdata=products.filter(item=>{
          return item.year == yearselected
        });
        setData(fdata)
      }else{
        setData(products)
      }
      setMonthselected("")
    }else{

      if(yearselected){
        let fdata=products.filter(item=>{
          return item.month == value  && item.year == yearselected
        })
        setData(fdata)
      }else{
        let fdata=products.filter(item=>{
          return item.month == value 
        })
        setData(fdata);
      }
      setMonthselected(value)

    }
  };

  return (
    <div className="container">
      <div className="dropdowns">
        <select onChange={(e)=>handleyear(e.target.value)}>
          <option value="allyears">allyears</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
        </select>
        <select onChange={(e)=>handlemonth(e.target.value)}>
          <option value="allmonths">allmonths</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
        </select>
      </div>
      <div className="cards">
        {data?.map((product) => {
          return <Card {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
