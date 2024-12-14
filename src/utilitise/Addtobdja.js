import { toast } from "react-toastify";

const getStoredReadList = () => {
  
  const storedListStr = localStorage.getItem('read-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
   return storedList;
  }
  else{
    return [];
  }
}

const addToStoredList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'alrady axist in the read list')
        toast('this book is added to your read list.')
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
        toast.success('this book is added to your read list.')
    }
}
export {addToStoredList ,getStoredReadList}