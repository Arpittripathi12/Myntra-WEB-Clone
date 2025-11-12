import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag=()=>{
  const bagItems=useSelector(store=>store.bag);
  const item=useSelector(store=>store.items);
  const finalItems=item.filter((item)=>{
    const elementFound=bagItems.indexOf(item.id);
    return elementFound>=0;
  });
 return <>
  
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=><BagItem item={item}/>)}
          
        </div>
        
        <BagSummary/>

      </div>
    </main>
    
 
 </>
}

export default Bag;